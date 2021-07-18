title_mapping = {'1nephi':'1 Nephi','2nephi':'2 Nephi','jacob':'Jacob','enos':'Enos',
'jarom':'Jarom','omni':'Omni','wom':'Words of Mormon','mosiah':'Mosiah','alma':'Alma',
'helaman':'Helaman','3nephi':'3 Nephi','4nephi':'4 Nephi','mormon':'Mormon','ether':'Ether',
'moroni':'Moroni'}

options_mapping = {'1nephi':22,'2nephi':33,'jacob':7,'enos':1,
'jarom':1,'omni':1,'wom':1,'mosiah':29,'alma':63,
'helaman':16,'3nephi':30,'4nephi':1,'mormon':9,'ether':15,
'moroni':10}

function init(){
    let selection = getUrlParameter("selection")
    let title = title_mapping[selection];
    d3.select('#book').text(title);
    for (let i = 1; i <= options_mapping[selection]; i++){
        let li = d3.select('#chapter-list').append('li').attr('class','nav-item');
        let a = li.append('a').attr('class','nav-link option ' + 'chap' + i.toString()).attr('onclick','select(\'' + selection + '_' + i.toString() + '\')').text('Chapter ' + i.toString());
    }
    select(selection + '_1')
}

function select(param){
    d3.select('#selection-title').text('Chapter ' + param.split('|')[1])
    let book = param.split('_')[0];
    let chapter = param.split('_')[1]
    d3.selectAll('.option').classed('selected',false);
    d3.select('.chap' + chapter).classed('selected',true);
    let audio_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.mp3';
    let thumbnail_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.png';
    let pdf_path = 'chapter-content/' + book + '/' + chapter + '/' + param + '.pdf';
    //Remove any previous content
    d3.selectAll('.replace').remove();
    //Add audio
    let audio = d3.select('#audio');
    audio.append('img').attr('src',thumbnail_path).attr('width','70').attr('height','70').attr('class','replace')
    audio.append('audio').attr('controls','').attr('class','replace').attr('src',audio_path).attr('type','audio/mpeg').text('Your browser does not support the audio element.')
    //Add PDF
    let pdf = d3.select('#pdf').append('embed').attr('class','replace').attr('src',pdf_path).attr('width','100%').attr('height','700px')
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
('aaron1','Aaron, Son of Mosiah','ĕr´an','p'),
('aaron2','Aaron, Lamanite King','ĕr´an','p'),
('abel', 'Abel','ā´bul','p'),
('abinadi','Abinadi','a-bĭn´a-dī','p'),
('abinadom','Abinadom','a-bĭn´a-dum','p'),
('abish','Abish','ā´bĭsh','p'),
('ablom','Ablom','ăb´lum','p'),
('abraham','Abraham','ā´bra-hăm','p'),
('adam','Adam','ăd´um','p'),
('agosh','Agosh','ā´gäsh','p'),
('aha','Aha','ā´hä','p'),
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
