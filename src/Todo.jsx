import todoImage from './assets/todo.jpg'
import darkModeImage from './assets/darkMode.png'
import './App.css'
import editImage from './assets/edit.png'
import deleteImage from './assets/delete.png'
import bottom_arrow from './assets/bottom_arrow.png'

import today from './assets/today.jpg'
import upcoming from './assets/upcoming.webp'
import all_task from './assets/all_task.webp'


function ToDO() {



    return (

        < div className='container'>

            <div className='appHeading'>
                <div className='todo_image_and_text'>
                    <img src={todoImage} className='todo_image' />
                    <h2>My To-Do List</h2>
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
                <button className='today_task' >
                    <img src={today} className='today_image' />
                    Today
                </button>

                <button className='upcoming_task'>
                    <img src={upcoming} className='upcoming_image' />
                    Upcoming</button>

                <button className='all_task'>
                    <img src={all_task} className='all_task_image' />
                    All Tasks</button>

                <button className='completed_task'>✓ Completed</button>
            </div>

            {/*search task and add button */}

            <div className='search_task_and_add_task'>


                <div className='search_task_and_clear_search'>
                    <input type='text' placeholder='Search tasks....' className='search_task'></input>
                    <button className='clear_search'>X</button>
                </div>

                <button className='add_task'>+ Add Task</button>

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
                    {/*                 <button className=''>Category</button>               */}

                </div>

                {/*cancel and add task */}
                <div className='cancel_button_and_add_task_button'>
                    <button className='cancel'>Cancel</button>
                    <button className='add_task'>Add Task</button>


                </div>


            </div>



            <div className='filter_section'>
                <div className='filter_top_line'>
                    <h2>Add Filters</h2>
                    <button>Clear Filters</button>
                </div>


                <div className='all_filters'>

                    <div className='status_filter'>
                        <button>All Status</button>
                        <ul>
                            <li>All</li>
                            <li>Active</li>
                            <li>Completed</li>
                        </ul>
                    </div>



                    <div className='priority_filter'>
                        <button>All priority</button>
                        <ul>
                            <li>Low</li>
                            <li>Medium</li>
                            <li>High</li>
                        </ul>
                    </div>


                    <div className='sorting_filter'>
                        <button>Sort By</button>
                        <ul>
                            <li>Newest</li>
                            <li>Oldest</li>
                            <li>Priority : Low to High</li>
                            <li>Priority : High to Low</li>
                            <li>Due Date : Nearest</li>
                            <li>Due Date : Oldest</li>
                        </ul>
                    </div>



                </div>


            </div>


            {/*                                                   */}

            <div className='task_show'>
                <h2>Tasks</h2>
                <div className='tasks_details'>
                    <input type='checkbox' />
                    <span className='task'>Learn React
                        <img src={bottom_arrow} />
                    </span>
                    <span className='date'>25 sept, 2026</span>
                    <span className='priority'>High</span>
                    <span className='category'>Study</span>

                    <button className='editImage'><img src={editImage}></img></button>
                    <button className='deleteImage'><img src={deleteImage}></img></button>
                </div>

            </div>


            <div className='task_description'>
                <p>Use state hook, array object ....</p>
            </div>


        </div>


    )

}


export default ToDO;