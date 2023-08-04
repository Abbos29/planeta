
// MAGNIFIC

$(document).ready(function() {
  // Инициализируем Magnific Popup
  $('.popup-link').magnificPopup({
    type: 'inline',
    closeMarkup: '<button title="%title%" class="mfp-close">×</button>'
  });

  $('#btnForm').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modalForm'
      },
      type: 'inline'
    });
  });

  $('#btn1').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal1'
      },
      type: 'inline'
    });
  });

  $('#btn2').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal2'
      },
      type: 'inline'
    });
  });

  $('#btn3').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal3'
      },
      type: 'inline'
    });
  });

  $('#btn4').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal4'
      },
      type: 'inline'
    });
  });

  $('#btn5').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal5'
      },
      type: 'inline'
    });
  });

  $('#btn6').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal6'
      },
      type: 'inline'
    });
  });

  $('#btn7').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal7'
      },
      type: 'inline'
    });
  });

  $('#btn8').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal8'
      },
      type: 'inline'
    });
  });

  $('#btn9').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal9'
      },
      type: 'inline'
    });
  });

  $('#btn10').on('click', function() {
    $.magnificPopup.open({
      items: {
        src: '#modal10'
      },
      type: 'inline'
    });
  });

});




document.addEventListener("DOMContentLoaded", function() {
  var btnFooter = document.getElementById("btnFooter");
  var btnForm = document.getElementById("btnForm");
  
  btnFooter.addEventListener("click", function() {
    setTimeout(function() {
      btnForm.click();
    }, 0);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var btnFooter = document.getElementById("hero2-btn");
  var btnForm = document.getElementById("btnForm");
  
  btnFooter.addEventListener("click", function() {
    setTimeout(function() {
      btnForm.click();
    }, 0);
  });
});


document.addEventListener("DOMContentLoaded", function() {
  var modalButtons = document.getElementsByClassName("modal__content-btn");
  var btnForm = document.getElementById("btnForm");
  
  for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener("click", function() {
      setTimeout(function() {
        btnForm.click();
      }, 0);
    });
  }
});





// TABS

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
  const headers = document.querySelectorAll(headerSelector);

  headers.forEach((header) => {
    const tabs = header.querySelectorAll(tabSelector);
    const contents = header.parentElement.querySelectorAll(contentSelector);

    function hideTabContent() {
      contents.forEach((item) => {
        item.style.display = 'none';
      });
      tabs.forEach((item) => {
        item.classList.remove(activeClass);
      });
    }

    function showTabContent(i = 0) {
      contents[i].style.display = display;
      tabs[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
      const target = e.target;

      if (
        target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
      ) {
        tabs.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent();
            showTabContent(i);
          }
        });
      }
    });
  });
}

// Пример использования:
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');