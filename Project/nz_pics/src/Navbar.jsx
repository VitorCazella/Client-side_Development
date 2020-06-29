import React from 'react';

function Navbar() {
    return (
        <div>
            <section id="sidebarLeft">
                <ul>
                    <li><a class="active" href="">Home</a></li>
                    <li><a href="src/albums.html">Albums</a></li>
                    <li><a href="src/new.html">New Photos</a></li>
                    <li><a href="src/photography.html">Photography</a></li>
                    <li><a href="src/about.html">About</a></li>
                </ul>
            </section>
        </div>
    );
}

export default Navbar;