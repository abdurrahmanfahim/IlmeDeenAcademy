// Enhanced UX for form submission button

// Navbar functionality
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.querySelector('.navbar-collapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    });
  });
});

// Function to manage button states
function setButtonState(state) {
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoading = submitBtn.querySelector('.btn-loading');
  const btnSuccess = submitBtn.querySelector('.btn-success');
  
  // Reset all states
  btnText.classList.add('d-none');
  btnLoading.classList.add('d-none');
  btnSuccess.classList.add('d-none');
  submitBtn.disabled = false;
  submitBtn.classList.remove('btn-loading', 'btn-success');
  
  switch(state) {
    case 'loading':
      btnLoading.classList.remove('d-none');
      submitBtn.disabled = true;
      submitBtn.classList.add('btn-loading');
      break;
    case 'success':
      btnSuccess.classList.remove('d-none');
      submitBtn.classList.add('btn-success');
      break;
    default:
      btnText.classList.remove('d-none');
      break;
  }
}

// Enhanced alert function
function showEnhancedAlert(type, message) {
  // Remove existing alerts
  const existingAlerts = document.querySelectorAll('.custom-alert');
  existingAlerts.forEach(alert => alert.remove());
  
  const alertContainer = document.createElement('div');
  alertContainer.className = 'custom-alert';
  let iconType, bgColor;
  
  if (type === 'success') {
    iconType = 'check-circle-fill';
    bgColor = 'alert-success';
  } else if (type === 'warning') {
    iconType = 'info-fill';
    bgColor = 'alert-warning';
  } else {
    iconType = 'exclamation-triangle-fill';
    bgColor = 'alert-danger';
  }
  
  alertContainer.innerHTML = `
    <div class="alert ${bgColor} alert-dismissible d-flex align-items-center shadow-lg" role="alert" 
         style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%) translateY(-20px); z-index: 9999; width: 90%; max-width: 400px; border-radius: 8px; opacity: 0; transition: all 0.3s ease;">
      <svg class="bi flex-shrink-0 me-2" width="20" height="20" role="img" aria-label="${type}:"><use xlink:href="#${iconType}"/></svg>
      <div class="flex-grow-1" style="font-size: 14px; line-height: 1.4;">${message}</div>
      <button type="button" class="btn-close btn-close-sm" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  
  document.body.appendChild(alertContainer);
  
  // Animate in
  setTimeout(() => {
    const alert = alertContainer.querySelector('.alert');
    if (alert) {
      alert.style.opacity = '1';
      alert.style.transform = 'translateX(-50%) translateY(0)';
    }
  }, 10);
  
  // Auto remove after 4 seconds
  setTimeout(() => {
    if (alertContainer && alertContainer.parentNode) {
      const alert = alertContainer.querySelector('.alert');
      if (alert) {
        alert.style.opacity = '0';
        alert.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => alertContainer.remove(), 300);
      }
    }
  }, 4000);
}

// Enhanced form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.querySelector('.submit');
  
  if (submitButton) {
    submitButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Set loading state
      setButtonState('loading');
      
      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        fatherName: document.getElementById("fatherName").value,
        phone: document.getElementById("phone").value,
        gender: document.getElementById("gender").value,
        subject: document.getElementById("subject").value,
        day: document.getElementById("day").value,
        hours: document.getElementById("hours").value,
        time: document.getElementById("time").value,
        trial: document.getElementById("trial").value,
        location: document.getElementById("location").value,
        nation: document.getElementById("nation").value,
      };
      
      // Validation with enhanced UX
      if (!formData.name.trim()) {
        showEnhancedAlert('warning', 'দয়া করে পূর্ণ নাম লিখুন');
        setButtonState('default');
        return;
      }
      if (!formData.fatherName.trim()) {
        showEnhancedAlert('warning', 'দয়া করে পিতার নাম লিখুন');
        setButtonState('default');
        return;
      }
      if (!formData.phone.trim()) {
        showEnhancedAlert('warning', 'দয়া করে হোয়াটসঅ্যাপ নাম্বার দিন');
        setButtonState('default');
        return;
      }
      if (!formData.gender || formData.gender === '') {
        showEnhancedAlert('warning', 'দয়া করে লিঙ্গ নির্বাচন করুন');
        setButtonState('default');
        return;
      }
      if (!formData.subject || formData.subject === '') {
        showEnhancedAlert('warning', 'দয়া করে বিষয় নির্বাচন করুন');
        setButtonState('default');
        return;
      }
      if (!formData.day.trim()) {
        showEnhancedAlert('warning', 'দয়া করে সপ্তাহে কয় দিন ক্লাস করতে চান তা লিখুন');
        setButtonState('default');
        return;
      }
      if (!formData.hours.trim()) {
        showEnhancedAlert('warning', 'দয়া করে প্রতিদিন কত ঘণ্টা পড়তে চান তা লিখুন');
        setButtonState('default');
        return;
      }
      if (!formData.nation.trim()) {
        showEnhancedAlert('warning', 'দয়া করে জাতীয়তা লিখুন');
        setButtonState('default');
        return;
      }

      
      // API submission
      const apiUrl = "https://script.google.com/macros/s/AKfycbwEQrVIqZLBUEXIUTN4WI34nqi-TeIqgn1AE42aWpJn86reGfmc_rlaJfXIarnLRJmCew/exec";
      
      fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(formData)
      })
      .then(res => res.text())
      .then(data => {
        setButtonState('success');
        showEnhancedAlert('success', 'সফলভাবে পাঠানো হয়েছে! শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।');
        console.log("Server Response:", data);
        
        // Reset form after success
        setTimeout(() => {
          document.getElementById("registrationForm").reset();
          setButtonState('default');
        }, 3000);
      })
      .catch(err => {
        console.error("❌ সমস্যা হয়েছে:", err);
        setButtonState('default');
        showEnhancedAlert('danger', 'ফর্ম পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।');
      });
    });
  }
});











