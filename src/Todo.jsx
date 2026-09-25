import todoImage from './assets/todoImage.jpg'
import darkModeImage from './assets/darkMode.png'
import './App.css'

function ToDO() {



    return (

        < div className='container'>

            <div className='appHeading'>
                <div className='todo_image_and_text'>
                    <img src={todoImage} className='todo_image' />
                    <h2>MY TASKS</h2>
                </div>
                <img src={darkModeImage} className='darkMode'></img>
            </div>

            {/* <hr></hr>*/}



            {/* Task progress*/}
            <div className='progressSection'>

                <div className='progressDone_and_progressline'>
                    <h2>Task Progress</h2>
                    <p>40% done</p>

                    <p className='progressLine'></p>
                    <p className='ovedue_task'>overdue 2 tasks</p>
                </div>

                <div className='ProgressCircle'>
                    <p>4/10</p>

                </div>

            </div>



            {/* task quickly views section*/}

            <div className='task_views'>
                <button className='today_task' >📅 Today</button>
                <button className='upcoming_task'>📆 Upcoming</button>
                <button className='all_task'>📆 All Tasks</button>
                <button className='completed_task'>✓ Completed</button>
            </div>

            {/*search task and add button */}

            <div className='search_task_and_add_task'>


                <div className='search_task_and_clear_search'>
                    <input type='text' placeholder='Search tasks....' className='search_task'></input>
                    <button className='clear_search'>X</button>
                </div>

                <button className='add_task'>Add Task</button>

            </div>


            {/*Add task form*/}
            <div className='add_task_form'>
                <h2>Add New Task</h2>


                <div>
                    <p>Task Name : </p>
                    <input type='text' placeholder='Enter Task Name...'></input>
                </div>


                <div>
                    <p>Description</p>
                    <textarea placeholder='Enter Task Description...(max 500 charcater)'></textarea>
                </div>





                {/* due_date priority and category and status  */}

                <div className='due_date_and_priority_and_category_and_status'>
                    <button className=''>Due Date</button>
                    <button className=''>Priority</button>
                    <button className=''>Category</button>

                </div>

                {/*cancel and add task */}
                <div className='cancel_button_and_add_task_button'>
                    <button className='cancel'>Cancel</button>
                    <button className='add_task'>Add Task</button>


                </div>


            </div>









        </div>


    )

}


export default ToDO;