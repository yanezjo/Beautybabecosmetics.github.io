
function goToWeb() {
  // Kunin ang mga input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Tukuyin ang mga tamang username at password at kanilang corresponding web pages
  var correctCredentials = {
    'admin': { password: 'admin', page: 'BeautyBabeCosmeticsWebsite.html' },
    'Admin': { password: 'ADMIN', page: 'Group1.html' }
  };

  // I-check kung tama ang username at password
  if (correctCredentials.hasOwnProperty(username) && correctCredentials[username].password === password) {
    // I-redirect ang browser kapag tama ang credentials
    window.location.href = correctCredentials[username].page;
  } else {
    // Kung hindi tama, ipakita ang alert
    alert('Incorrect username or password. Try again.');
  }
}