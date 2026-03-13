/**
 * ============================================
 * Google Apps Script — для сбора заявок
 * ============================================
 * 
 * ИНСТРУКЦИЯ:
 * 
 * 1. Создай новую Google Таблицу (Google Sheets):
 *    → https://sheets.google.com → "+ Пустая таблица"
 * 
 * 2. Назови первый лист "Заявки" (или оставь как есть)
 * 
 * 3. Добавь заголовки в первую строку (A1:P1):
 *    Дата | Имя | Фамилия | Email | Телефон | Город | Занятость | 
 *    Опыт | Инструменты | Цель | Мотивация | Часов/нед | 
 *    Instagram | Портфолио | Источник | Комментарии
 * 
 * 4. Открой Extensions → Apps Script
 * 
 * 5. Удали весь код в редакторе и вставь код ниже
 * 
 * 6. Нажми "Deploy" → "New deployment"
 *    → Type: "Web app"
 *    → Execute as: "Me"  
 *    → Who has access: "Anyone"
 *    → Нажми "Deploy"
 * 
 * 7. Скопируй URL веб-приложения
 * 
 * 8. Вставь этот URL в файл app.js в строку:
 *    const GOOGLE_SCRIPT_URL = 'ВСТАВЬ_СЮДА_URL';
 * 
 * ============================================
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Форматируем дату
    const date = new Date(data.timestamp);
    const formattedDate = Utilities.formatDate(date, 'Europe/Moscow', 'dd.MM.yyyy HH:mm');
    
    // Добавляем строку в таблицу
    sheet.appendRow([
      formattedDate,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.city,
      data.occupation,
      data.experience,
      data.tools,
      data.goal,
      data.motivation,
      data.hoursPerWeek,
      data.instagram,
      data.portfolio,
      data.source,
      data.comments
    ]);
    
    // Отправляем уведомление на email (опционально)
    // sendNotificationEmail(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'active', message: 'Form API is working!' }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Опционально: Отправка уведомления на email при новой заявке
 * Раскомментируй вызов sendNotificationEmail(data) в doPost() выше
 */
function sendNotificationEmail(data) {
  const recipientEmail = 'YOUR_EMAIL@gmail.com'; // Замени на свой email
  
  const subject = `🎨 Новая заявка на курс: ${data.firstName} ${data.lastName}`;
  
  const body = `
Новая заявка на курс по продукт-дизайну!

👤 Контактные данные:
   Имя: ${data.firstName} ${data.lastName}
   Email: ${data.email}
   Телефон: ${data.phone}
   Город: ${data.city || 'Не указан'}

🎓 Опыт:
   Занятость: ${data.occupation}
   Уровень: ${data.experience}
   Инструменты: ${data.tools || 'Не указаны'}

🔥 Мотивация:
   Цель: ${data.goal}
   Мотивация: ${data.motivation}
   Часов в неделю: ${data.hoursPerWeek}

📱 Дополнительно:
   Instagram: ${data.instagram || 'Не указан'}
   Портфолио: ${data.portfolio || 'Не указано'}
   Источник: ${data.source}
   Комментарии: ${data.comments || 'Нет'}
  `;
  
  MailApp.sendEmail(recipientEmail, subject, body);
}
