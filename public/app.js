document.addEventListener('DOMContentLoaded', () => {
    fetch('/tasks')
        .then(response => response.json())
        .then(tasks => loadList(tasks))
        .catch(error => console.error('Error fetching tasks:', error));
});

function loadList(tasks){
    let ul = document.getElementById('ul');
    if (!ul) {
        console.error('Element with ID "ul" not found');
        return;
    }
    let n = tasks.length;
    ul.innerHTML = '';
    for(let i = 0 ; i < n ; i++){
        let newTitle = document.createElement('li');
        newTitle.textContent = `${tasks[i].title}`;
        ul.appendChild(newTitle);
        let frm = document.createElement('form');
        frm.setAttribute('action', `/delete/${i}`);
        frm.setAttribute('method', 'post');
        frm.innerHTML = `<button type="submit">Delete</button>`;
        newTitle.appendChild(frm);
    }

}


//         <li>
//             Welcome!
//             <ul type="none">
//              <li>
//                 <form action="/delete/0" method="post">
//                 <button type="submit">Delete</button>
//                 </form>
//             </li>
//             </ul>
//         </li> 