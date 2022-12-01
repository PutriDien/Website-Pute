import React from 'react'

const Navbar = () => {
  return (
    
    <div>
        <nav class="navbar navbar-expand-lg navbar-primary bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#">Putri Anjeli Dien</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Interest</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#AboutMe">About Me</a></li>
                            <li><hr class="dropdown-divider"></hr></li>
                            <li><a class="dropdown-item" href="#">Recent Work</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  </div>
  )
}

export default Navbar