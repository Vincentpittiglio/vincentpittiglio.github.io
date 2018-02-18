$(document).ready(function() {
    $('.js-scrollTo').on('click', function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
      return false;
      });
      });

function open_window(votre_page)
				{
					var hauteur_popup=800;
					var H = (screen.height - hauteur_popup) / 2;
					var largeur_popup=800;
					var L = (screen.width - largeur_popup) / 2;
					pop_up = window.open(votre_page,"Popup","status=yes,scrollbars=yes,resizable=no,height="+hauteur_popup+",width="+largeur_popup+",top="+H+",left="+L);
				}



