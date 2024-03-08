document.addEventListener('DOMContentLoaded', () => {
  // Get form, input, and task list elements from the DOM
  const form = document.querySelector('#new-task-form')
  const input = document.querySelector('#new-task-input')
  const list_el = document.querySelector('#tasks')

  // Add event listener for form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault() // Prevent form submission from reloading the page

    const task = input.value // Get the task input value

    // Create a new task element
    const task_el = document.createElement('div')
    task_el.classList.add('task') // Add 'task' class to the task element

    // Create content container for the task
    const task_content_el = document.createElement('div')
    task_content_el.classList.add('content') // Add 'content' class to the content container

    // Create input element to display the task content
    const task_input_el = document.createElement('input')
    task_input_el.classList.add('text') // Add 'text' class to the input element
    task_input_el.type = 'text' // Set input type to 'text'
    task_input_el.value = task // Set the input value to the task content
    task_input_el.setAttribute('readonly', 'readonly') // Make the input readonly

    // Append the input element to the content container
    task_content_el.appendChild(task_input_el)

    // Create container for task actions (edit and delete buttons)
    const task_actions_el = document.createElement('div')
    task_actions_el.classList.add('actions') // Add 'actions' class to the actions container

    // Create 'Edit' button
    const task_edit_el = document.createElement('button')
    task_edit_el.classList.add('edit') // Add 'edit' class to the edit button
    task_edit_el.innerText = 'Edit' // Set the button text to 'Edit'

    // Create 'Delete' button
    const task_delete_el = document.createElement('button')
    task_delete_el.classList.add('delete') // Add 'delete' class to the delete button
    task_delete_el.innerText = 'Delete' // Set the button text to 'Delete'

    // Append the edit and delete buttons to the actions container
    task_actions_el.appendChild(task_edit_el)
    task_actions_el.appendChild(task_delete_el)

    // Append the content container and actions container to the task element
    task_el.appendChild(task_content_el)
    task_el.appendChild(task_actions_el)

    // Append the task element to the task list
    list_el.appendChild(task_el)

    // Clear the input field after adding the task
    input.value = ''

    // Add event listener for 'Edit' button click
    task_edit_el.addEventListener('click', () => {
      // Toggle between 'Edit' and 'Save' text on the button
      if (task_edit_el.innerText.toLowerCase() === 'edit') {
        task_edit_el.innerText = 'Save'
        task_input_el.removeAttribute('readonly') // Enable editing of the task content
        task_input_el.focus() // Set focus on the input field
      } else {
        task_edit_el.innerText = 'Edit'
        task_input_el.setAttribute('readonly', 'readonly') // Make the input readonly
      }
    })

    // Add event listener for 'Delete' button click
    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el) // Remove the task element from the task list
    })
  })
})
