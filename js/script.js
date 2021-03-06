title_mapping = {'1nephi':'1 Nephi','2nephi':'2 Nephi','jacob':'Jacob','enos':'Enos',
'jarom':'Jarom','omni':'Omni','wom':'Words of Mormon','mosiah':'Mosiah','alma':'Alma',
'helaman':'Helaman','3nephi':'3 Nephi','4nephi':'4 Nephi','mormon':'Mormon','ether':'Ether',
'moroni':'Moroni'}

options_mapping = {'1nephi':22,'2nephi':33,'jacob':7,'enos':1,
'jarom':1,'omni':1,'wom':1,'mosiah':29,'alma':63,
'helaman':16,'3nephi':30,'4nephi':1,'mormon':9,'ether':15,
'moroni':10}

function buildChapterList(){
  let selection = getUrlParameter("book")
  for (let i = 1; i <= options_mapping[selection]; i++){
      let li = d3.select('#chapters').append('li').attr('class','nav-item');
      li.style('text-align','center')
      let a = li.append('a').attr('class','border-bottom nav-link option ' + 'chap' + i.toString()).attr('onclick','select(\'' + selection + '_' + i.toString() + '\')').text('Chapter ' + i.toString());
  }
}

function select(param){
  location.href = 'chapter.html?select=' + param;
}

async function loadChapter(){
  let param = getUrlParameter("select")
  let book = param.split('_')[0];
  let chapter = param.split('_')[1];
  let audio_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.mp3';
  let thumbnail_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.png';
  let pdf_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.pdf#page=1';
  //Add audio
  let audio = d3.select('#audio');
  let back = audio.append('a').attr('class','btn btn-lg btn-primary').attr('href','chapter-list.html?book=' + book);
  back.append('span').attr('data-feather','arrow-left');
  audio.append('img').attr('src',thumbnail_path).attr('width','70').attr('height','70').attr('class','replace ml-2 mr-2')
  audio.append('audio').attr('controls','').attr('class','replace').attr('src',audio_path).attr('type','audio/mpeg').text('Your browser does not support the audio element.')
  //Add PDF
  let pdf = d3.select('#pdf');
  let a = pdf.append('a').attr('id','prev').attr('class','btn btn-sm btn-secondary text-light ml-2 mb-2').attr('onclick','previousPage(\'' + pdf_path + '\')');
  a.append('span').attr('data-feather','chevron-left')
  a = pdf.append('a').attr('id','next').attr('class','btn btn-sm btn-secondary text-light ml-2 mb-2').attr('onclick','nextPage(\'' + pdf_path + '\')');
  a.append('span').attr('data-feather','chevron-right')
  pdf.append('br')
  pdf.append('iframe').attr('id','pdf-frame').attr('src',pdf_path).attr('width','95%').attr('height','500px')
  feather.replace()
}

function nextPage(pdf_path){
  let next_page = parseInt(pdf_path.slice(-1)) + 1;
  let prev_page = parseInt(pdf_path.slice(-1)) - 1;
  if (prev_page === 0){
    prev_page = 1
    next_page = 2
  }
  next_path = pdf_path.substring(0, pdf_path.length - 1) + next_page.toString()
  let frame = d3.select('#pdf-frame').attr('src', next_path)
  d3.select('#prev').attr('onclick','previousPage(\'' + next_path + '\')');
  d3.select('#next').attr('onclick','nextPage(\'' + next_path + '\')');
  document.getElementById('pdf-frame').contentDocument.location.reload(true);
  return false;
}

function previousPage(pdf_path){
  let next_page = parseInt(pdf_path.slice(-1)) + 1;
  let prev_page = parseInt(pdf_path.slice(-1)) - 1;
  if (prev_page === 0){
    prev_page = 1
    next_page = 2
  }
  prev_path = pdf_path.substring(0, pdf_path.length - 1) + prev_page.toString()
  let frame = d3.select('#pdf-frame').attr('src', prev_path)
  d3.select('#prev').attr('onclick','previousPage(\'' + prev_path + '\')');
  d3.select('#next').attr('onclick','nextPage(\'' + prev_path + '\')');
  document.getElementById('pdf-frame').contentDocument.location.reload(true);
  return false;
}

function getUrlParameter(sParam) {
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');
    for (let i = 0; i < sURLVariables.length; i++)
    {
        let sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            let res = sParameterName[1].replace(/\+/g, '%20');
            return decodeURIComponent(res);
        }
    }
}



names = [
('aaron1','Aaron, Son of Mosiah','??r??an','p'),
('aaron2','Aaron, Lamanite King','??r??an','p'),
('abel', 'Abel','????bul','p'),
('abinadi','Abinadi','a-b??n??a-d??','p'),
('abinadom','Abinadom','a-b??n??a-dum','p'),
('abish','Abish','????b??sh','p'),
('ablom','Ablom','??b??lum','p'),
('abraham','Abraham','????bra-h??m','p'),
('adam','Adam','??d??um','p'),
('agosh','Agosh','????g??sh','p'),
('aha','Aha','????h??','p'),
('ahah','Ahah','','p'),
('akish1','Akish, Jaredite King','p'),
('alma1','Alma, the Elder','p'),
('alma2','Alma, Son of Alma','p'),
('alma3','Alma, Valley of','l'),
('amaleki1','Amaleki, Son of Abinadom','p'),
('amaleki2','Amaleki, Nephite Expeditioner','p'),
('amalekites','Amalekites','g'),


('ammon1','Ammon, the Mulekite'),
('ammon2','Ammon, Son of Mosiah'),
('amulek','Amulek'),
('a-n-l','Anti-Nephi-Lehi'),
('a-n-ls','Anti-Nephi-Lehies'),
('benjamin','Benjamin'),
('daughters-lehi','Daughters, of Lehi'),
('daughters-ishmael','Daughters, of Ishmael'),
('elders-jews','Elders, of the Jews'),
('enos','Enos'),
('gideon','Gideon'),
('ishmael','Ishmael'),
('jacob1','Jacob, Son of Lehi'),
('jerusalem1','Jerusalem, Jews'),
('joseph1','Joseph, Son of Lehi'),
('joseph2','Joseph, Son of Jacob'),
('laban','Laban'),
('laman','Laman, Son of Lehi'),
('lehi','Lehi, Father'),
('lemuel','Lemuel'),
('nephi1','Nephi, Son of Lehi'),
('sam','Sam'),
('sariah','Sariah'),
('sherem','Sherem'),
('sons-ishmael','Sons, of Ishmael'),
('wife-ishmael','Wife, of Ishmael'),
('zedekiah','Zedekiah, King'),
('zoram','Zoram'),
]
function initProfiles(){
  let list = d3.select('#profile-list');

}

function profile(param){
    d3.select('#name').text(param);
}

function search(e){
    let filter, txtValue;
    filter = e.value.toUpperCase();
    let options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++){
        let d = options[i];
        txtValue = d.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            d.style.display = "";
        } else {
            d.style.display = "none";
        }
    }
}
