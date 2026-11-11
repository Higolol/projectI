/**
 * Скрипт быстрой настройки Telegram-бота для заказов
 * Запуск:
 *   node scripts/setup-bot.js <ТОКЕН_БОТА>
 * или (если токен уже вставлен в js/config.js):
 *   node scripts/setup-bot.js
 */

const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'js', 'config.js');

async function main() {
  let token = process.argv[2]?.trim();

  // If token not passed in CLI, read from js/config.js
  if (!token && fs.existsSync(configPath)) {
    const content = fs.readFileSync(configPath, 'utf8');
    const match = content.match(/botToken:\s*['"]([^'"]+)['"]/);
    if (match && match[1] && match[1] !== 'YOUR_BOT_TOKEN') {
      token = match[1].trim();
    }
  }

  if (!token) {
    console.log('\n❌ Ошибка: Токен бота не указан!');
    console.log('Использование:');
    console.log('  node scripts/setup-bot.js <ТОКЕН_ОТ_BOTFATHER>\n');
    process.exit(1);
  }

  console.log('\n🔍 Проверяем токен бота в Telegram API...');

  // 1. Проверяем бота через getMe
  let botInfo;
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/getMe`);
    const data = await res.json();
    if (!data.ok) {
      console.error('❌ Telegram API вернул ошибку:', data.description);
      process.exit(1);
    }
    botInfo = data.result;
    console.log(`✅ Бот найден: @${botInfo.username} (${botInfo.first_name})`);
    console.log(`🔗 Ссылка на бота: https://t.me/${botInfo.username}`);
  } catch (err) {
    console.error('❌ Сетевая ошибка при подключении к Telegram:', err.message);
    process.exit(1);
  }

  // 2. Проверяем обновления через getUpdates (нажал ли клиент /start)
  console.log('\n🔍 Проверяем входящие сообщения от клиента (/start)...');
  let updates = [];
  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
    const data = await res.json();
    if (data.ok && Array.isArray(data.result)) {
      updates = data.result;
    }
  } catch (err) {
    console.error('❌ Не удалось получить обновления:', err.message);
  }

  const chats = new Map();
  for (const update of updates) {
    const msg = update.message || update.channel_post || update.edited_message;
    if (msg && msg.chat && msg.chat.id) {
      chats.set(msg.chat.id, {
        id: msg.chat.id,
        name: msg.from?.first_name || msg.chat.title || 'Пользователь',
        username: msg.from?.username || ''
      });
    }
  }

  let detectedChatId = '';
  if (chats.size > 0) {
    const lastChat = Array.from(chats.values()).pop();
    detectedChatId = String(lastChat.id);
    console.log(`✅ Клиент обнаружен!`);
    console.log(`   Имя: ${lastChat.name}${lastChat.username ? ` (@${lastChat.username})` : ''}`);
    console.log(`   Chat ID: ${detectedChatId}`);

    // Отправляем тестовое приветствие клиенту
    try {
      const welcomeMsg =
        `🎉 <b>Бот успешно подключен к сайту «ПРОЕКТ: Я»!</b>\n\n` +
        `Здравствуйте, ${lastChat.name}!\n` +
        `Теперь сюда будут моментально поступать все уведомления о новых заказах и покупателях тетради самоконтроля. 🚀\n\n` +
        `<i>Система готова к приёму заказов!</i>`;

      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: detectedChatId,
          text: welcomeMsg,
          parse_mode: 'HTML'
        })
      });
      console.log('✅ Тестовое приветственное сообщение отправлено клиенту в Telegram!');
    } catch (e) {
      console.warn('⚠️ Не удалось отправить приветственное сообщение:', e.message);
    }
  } else {
    console.log('⏳ Клиент ещё не нажал /start в боте.');
    console.log(`👉 Отправьте клиенту ссылку: https://t.me/${botInfo.username}`);
    console.log('👉 Пусть клиент откроет бота и нажмет кнопку «Запустить» (или отправит /start).');
  }

  // 3. Обновляем js/config.js
  if (fs.existsSync(configPath)) {
    let content = fs.readFileSync(configPath, 'utf8');
    content = content.replace(/botToken:\s*['"][^'"]*['"]/, `botToken: '${token}'`);
    if (detectedChatId) {
      content = content.replace(/chatId:\s*['"][^'"]*['"]/, `chatId: '${detectedChatId}'`);
    }
    fs.writeFileSync(configPath, content, 'utf8');
    console.log(`\n💾 Конфигурационный файл js/config.js успешно обновлен!`);
  }

  console.log('\n======================================================');
  if (detectedChatId) {
    console.log('🎉 ВСЁ ГОТОВО! Бот полностью настроен и протестирован.');
  } else {
    console.log('💡 Токен сохранен! Как только клиент нажмет /start в боте,');
    console.log('   сайт автоматически определит его и начнет отправлять заказы!');
  }
  console.log('======================================================\n');
}

main().catch(console.error);
