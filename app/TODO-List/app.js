let todoTaskELe = document.getElementById('todo-task'),
    todoTaskValue = todoTaskELe.value,
    liELe = document.createElement('li'),
    spanELe = document.createElement('span'),
    doneELe = document.createElement('done'),
    editELe = document.createElement('edit'),
    deleteELe = document.createElement('delete');


    
    doneELe = document.createElement('a'),
    editELe = document.createElement('a'),
    deleteELe = document.createElement('a');

        
    spanELe.innerHTML = todoTaskValue;

    doneELe.classList.add('done-btn');
    editELe.classList.add('edit-btn');
    deleteELe.classList.add('delete-btn');


   doneELe.innerHTML = 'done';
   editELe.innerHTML = 'done';
   deleteELe.innerHTML = 'done';

   doneELe.setAttribute('href', '# ');
   editELe.setAttribute('href', '# ');
   deleteELe.setAttribute('href', '# ');
