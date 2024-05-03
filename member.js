function skillsMember(){
    var list = document.getElementById('skills');
    var skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'Django'];
    skills.forEach(function(skill){
        var item = document.createElement('li');
        item.innerText = skill;
        list.appendChild(item);
    });
    var button = document.createElement('button');
    button.innerText = 'Clear';
    button.onclick = function(){
        list.innerHTML = '';
    };
    document.body.appendChild(button);
}