function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Ilm-e Deen Academy Student Entry List");

    if (!sheet) {
      sheet = ss.getActiveSheet();
    }

    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();

    sheet.appendRow([
      timestamp,
      data.name,
      data.fatherName,
      data.phone,
      data.gender,
      data.subject,
      data.day,
      data.hours,
      data.time,
      data.trial,
      data.location,
      data.nation,
    ]);

    const htmlBody = `
    <div style="max-width: 600px; margin: 0 auto; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f8f9fa; padding: 20px;">
      <div style="background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #023440, #1c5b5e); padding: 30px; text-align: center;">
          <h1 style="color: #e0be74; margin: 0; font-size: 28px; font-weight: 600;">Ilm-e Deen Academy</h1>
          <p style="color: #a2c3b6; margin: 8px 0 0 0; font-size: 16px;">New Student Registration</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
          <p style="color: #023440; font-size: 16px; margin: 0 0 25px 0; line-height: 1.5;">
            Assalamu Alaikum,<br>
            A new student has registered for classes. Please find the details below:
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440; width: 40%;">পূর্ণ নাম</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">পিতার নাম</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.fatherName}</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">হোয়াটসঅ্যাপ নাম্বার</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">
                <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" style="color: #1c5b5e; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">লিঙ্গ</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.gender}</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">বিষয়</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.subject}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">সাপ্তাহিক ক্লাস</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.day} দিন</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">দৈনিক সময়</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.hours} ঘণ্টা</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">পছন্দের সময়</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.time || 'নির্দিষ্ট নয়'}</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">ফ্রি ট্রায়াল</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.trial}</td>
            </tr>
            <tr>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">অবস্থান</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.location || 'উল্লেখ নেই'}</td>
            </tr>
            <tr style="background: #f8f9fa;">
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; font-weight: 600; color: #023440;">জাতীয়তা</td>
              <td style="padding: 12px 15px; border: 1px solid #e9ecef; color: #625436;">${data.nation}</td>
            </tr>
          </table>
          
          <!-- Action Button -->
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, '')}" 
               style="background: linear-gradient(135deg, #023440, #1c5b5e); color: #e0be74; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: 600; display: inline-block;">
              Contact Student
            </a>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="color: #625436; font-size: 14px; margin: 0;">
            Registration Time: ${timestamp.toLocaleString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric', 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </p>
          <p style="color: #a2c3b6; font-size: 12px; margin: 8px 0 0 0;">
            © ${new Date().getFullYear()} Ilm-e Deen Academy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    `;

    const recipients = [
      "fahimahmad123go@gmail.com",
      "ilmedeenacademybd@gmail.com"
      // "abdurrahman123go@gmail.com",
      // "fahimabdurrahman.uimc.b3@gmail.com"
    ];

    MailApp.sendEmail({
      to: recipients.join(","),
      subject: "New Registration - Ilm-e Deen Academy",
      htmlBody: htmlBody
    });

    return ContentService.createTextOutput("Success");

  } catch (error) {
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}