
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Dashborad() {
    // useEffect(()=>{

    // document.querySelector(".jsFilter").addEventListener("click", function () {
    //     document.querySelector(".filter-menu").classList.toggle("active");
    //   });
      
    //   document.querySelector(".grid").addEventListener("click", function () {
    //     document.querySelector(".list").classList.remove("active");
    //     document.querySelector(".grid").classList.add("active");
    //     document.querySelector(".products-area-wrapper").classList.add("gridView");
    //     document
    //       .querySelector(".products-area-wrapper")
    //       .classList.remove("tableView");
    //   });
      
    //   document.querySelector(".list").addEventListener("click", function () {
    //     document.querySelector(".list").classList.add("active");
    //     document.querySelector(".grid").classList.remove("active");
    //     document.querySelector(".products-area-wrapper").classList.remove("gridView");
    //     document.querySelector(".products-area-wrapper").classList.add("tableView");
    //   });
      
    //   var modeSwitch = document.querySelector('.mode-switch');
    //   modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
    //    modeSwitch.classList.toggle('active');
    //   });
    // })
  return (
  <>
  {/* <div class="app-container  dash">
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="app-icon">
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M507.606 371.054a187.217 187.217 0 00-23.051-19.606c-17.316 19.999-37.648 36.808-60.572 50.041-35.508 20.505-75.893 31.452-116.875 31.711 21.762 8.776 45.224 13.38 69.396 13.38 49.524 0 96.084-19.286 131.103-54.305a15 15 0 004.394-10.606 15.028 15.028 0 00-4.395-10.615zM27.445 351.448a187.392 187.392 0 00-23.051 19.606C1.581 373.868 0 377.691 0 381.669s1.581 7.793 4.394 10.606c35.019 35.019 81.579 54.305 131.103 54.305 24.172 0 47.634-4.604 69.396-13.38-40.985-.259-81.367-11.206-116.879-31.713-22.922-13.231-43.254-30.04-60.569-50.039zM103.015 375.508c24.937 14.4 53.928 24.056 84.837 26.854-53.409-29.561-82.274-70.602-95.861-94.135-14.942-25.878-25.041-53.917-30.063-83.421-14.921.64-29.775 2.868-44.227 6.709-6.6 1.576-11.507 7.517-11.507 14.599 0 1.312.172 2.618.512 3.885 15.32 57.142 52.726 100.35 96.309 125.509zM324.148 402.362c30.908-2.799 59.9-12.454 84.837-26.854 43.583-25.159 80.989-68.367 96.31-125.508.34-1.267.512-2.573.512-3.885 0-7.082-4.907-13.023-11.507-14.599-14.452-3.841-29.306-6.07-44.227-6.709-5.022 29.504-15.121 57.543-30.063 83.421-13.588 23.533-42.419 64.554-95.862 94.134zM187.301 366.948c-15.157-24.483-38.696-71.48-38.696-135.903 0-32.646 6.043-64.401 17.945-94.529-16.394-9.351-33.972-16.623-52.273-21.525-8.004-2.142-16.225 2.604-18.37 10.605-16.372 61.078-4.825 121.063 22.064 167.631 16.325 28.275 39.769 54.111 69.33 73.721zM324.684 366.957c29.568-19.611 53.017-45.451 69.344-73.73 26.889-46.569 38.436-106.553 22.064-167.631-2.145-8.001-10.366-12.748-18.37-10.605-18.304 4.902-35.883 12.176-52.279 21.529 11.9 30.126 17.943 61.88 17.943 94.525.001 64.478-23.58 111.488-38.702 135.912zM266.606 69.813c-2.813-2.813-6.637-4.394-10.615-4.394a15 15 0 00-10.606 4.394c-39.289 39.289-66.78 96.005-66.78 161.231 0 65.256 27.522 121.974 66.78 161.231 2.813 2.813 6.637 4.394 10.615 4.394s7.793-1.581 10.606-4.394c39.248-39.247 66.78-95.96 66.78-161.231.001-65.256-27.511-121.964-66.78-161.231z"/></svg>
      </div>
    </div>
    <ul class="sidebar-list">
      <li class="sidebar-list-item">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <span>Home</span>
        </a>
      </li>
      <li class="sidebar-list-item active">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          <span>Products</span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
          <span>Statistics</span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>
          <span>Inbox</span>
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          <span>Notifications</span>
        </a>
      </li>
    </ul>
    <div class="account-info">
      <div class="account-info-picture">
        <img src="https://images.unsplash.com/photo-1527736947477-2790e28f3443?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHx3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="Account" />
      </div>
      <div class="account-info-name">Monica G.</div>
      <button class="account-info-more">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>
  </div>
  <div class="app-content">
    <div class="app-content-header">
      <h1 class="app-content-headerText">Products</h1>
      <button class="mode-switch" title="Switch Theme">
        <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
          <defs></defs>
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      </button>
      <button class="app-content-headerButton">Add Product</button>
    </div>
    <div class="app-content-actions">
      <input class="search-bar" placeholder="Search..." type="text" />
      <div class="app-content-actions-wrapper">
        <div class="filter-button-wrapper">
          <button class="action-button filter jsFilter"><span>Filter</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-filter"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg></button>
          <div class="filter-menu">
            <label>Category</label>
            <select>
              <option>All Categories</option>
              <option>Furniture</option>                     <option>Decoration</option>
              <option>Kitchen</option>
              <option>Bathroom</option>
            </select>
            <label>Status</label>
            <select>
              <option>All Status</option>
              <option>Active</option>
              <option>Disabled</option>
            </select>
            <div class="filter-menu-buttons">
              <button class="filter-button reset">
                Reset
              </button>
              <button class="filter-button apply">
                Apply
              </button>
            </div>
          </div>
        </div>
        <button class="action-button list active" title="List View">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
        </button>
        <button class="action-button grid" title="Grid View">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        </button>
      </div>
    </div>
    <div class="products-area-wrapper tableView">
      <div class="products-header">
        <div class="product-cell image">
          Items
          <button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button>
        </div>
        <div class="product-cell category">Category<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell status-cell">Status<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell sales">Sales<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell stock">Stock<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
        <div class="product-cell price">Price<button class="sort-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512"><path fill="currentColor" d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"/></svg>
          </button></div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="product" />
            <span>Ocean</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>11</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>36</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$560</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0Y2hlbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Lou</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Kitchen</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status disabled">Disabled</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>6</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$710</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Yellow</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>61</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>56</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$360</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVkcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Dreamy</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Bedroom</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status disabled">Disabled</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>41</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>66</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$260</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Boheme</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Sky</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Bathroom</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status disabled">Disabled</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>22</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>44</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$160</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Midnight</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>23</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>45</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$340</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Boheme</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1511389026070-a14ae610a1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Palm</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>24</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$60</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Forest</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Living Room</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>41</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>16</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$270</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Sand</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Living Room</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status disabled">Disabled</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>52</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>16</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$230</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGludGVyaW9yfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Autumn</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Decoration</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>21</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>46</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$252</div>
      </div>
      <div class="products-row">
        <button class="cell-more-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
          <div class="product-cell image">
            <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="product" />
            <span>Boheme</span>
          </div>
        <div class="product-cell category"><span class="cell-label">Category:</span>Furniture</div>
        <div class="product-cell status-cell">
          <span class="cell-label">Status:</span>
          <span class="status active">Active</span>
        </div>
        <div class="product-cell sales"><span class="cell-label">Sales:</span>32</div>
        <div class="product-cell stock"><span class="cell-label">Stock:</span>40</div>
        <div class="product-cell price"><span class="cell-label">Price:</span>$350</div>
      </div>
    </div>
  </div>
</div> */}




<header className='dash_head'>
<div class="dashboard-river">

  <div class="dashboard-container">

    <div class="dashboard">

      <div class="ui-row-1">

        <div class="logo-comp">
          <div><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"   x="0px" y="0px" viewBox="0 0 297 297" xml:space="preserve">
              <g>
                <path d="M48.523,73.196h18.131c5.597,0,10.137-4.536,10.137-10.134c0-5.6-4.54-10.137-10.137-10.137H48.523 c-5.599,0-10.137,4.537-10.137,10.137C38.387,68.66,42.925,73.196,48.523,73.196z" />
                <path d="M47.628,123.657c0-5.598-4.54-10.137-10.137-10.137H19.357c-5.599,0-10.135,4.539-10.135,10.137 c0,5.597,4.536,10.135,10.135,10.135h18.134C43.088,133.792,47.628,129.254,47.628,123.657z" />
                <path d="M277.643,95.387h-18.135c-5.597,0-10.137,4.539-10.137,10.135c0,5.601,4.54,10.137,10.137,10.137h18.135 c5.599,0,10.135-4.536,10.135-10.137C287.777,99.926,283.241,95.387,277.643,95.387z" />
                <path d="M140.148,203.69v83.173c0,5.598,4.54,10.137,10.137,10.137c5.599,0,10.137-4.539,10.137-10.137V203.69h93.406 c5.597,0,10.137-4.539,10.137-10.136c0-5.598-4.54-10.137-10.137-10.137H227.05c3.911-8.197,5.898-17.617,5.898-28.209 c0-29.299-21.058-60.583-39.637-88.187c-5.055-7.506-9.829-14.599-13.809-21.124c-1.689-3.791-1.094-19.677,1.284-34.106 c0.487-2.938-0.344-5.942-2.271-8.212c-1.926-2.27-4.752-3.58-7.73-3.58h-40.998c-2.977,0-5.803,1.313-7.729,3.58 c-1.924,2.268-2.755,5.271-2.273,8.21c2.383,14.432,2.978,30.316,1.288,34.107c-3.984,6.527-8.759,13.619-13.813,21.126 c-18.579,27.604-39.639,58.887-39.639,88.186c0,10.592,1.987,20.012,5.902,28.209H46.745c-5.601,0-10.137,4.539-10.137,10.137 c0,5.597,4.536,10.136,10.137,10.136H140.148z M202.707,183.418H97.864c-6.701-7.003-9.968-16.27-9.968-28.209 c0-23.111,19.222-51.669,36.182-76.865c5.209-7.738,10.13-15.05,14.363-21.993c4.769-7.819,4.27-23.774,2.954-36.077h17.781 c-1.316,12.302-1.813,28.257,2.952,36.077c4.233,6.943,9.153,14.252,14.362,21.992c16.96,25.197,36.184,53.755,36.184,76.866 C212.675,167.148,209.406,176.417,202.707,183.418z" />
              </g>
            </svg></div>
          <p>GRAPHIC DESIGN</p>
        </div>

        <div class="search">
          <input type="search" id="search" name="search" placeholder="Search for clay..." />
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </div>

        <div class="profile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
          </svg>
          <div></div>
        </div>

        <div class="profile-small">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />
          </svg>
        </div>

      </div>
     
      <div class="ui-row-2">
     
        <div class="left-sidebar">
          
          <div>
           
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
              <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>
           
          </div>

          <div>
          
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <Link to='/display' >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </Link>
            </svg>
            
          </div>
          
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bookmarks-fill" viewBox="0 0 16 16">
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
              <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
            </svg>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
              <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z" />
            </svg>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
              <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
            </svg>
          </div>

          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-tags-fill" viewBox="0 0 16 16">
              <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
            </svg>
          </div>

        </div>
        
        <div class="main-content">

          <div class="header">

            <div class="page-display">
              <h1>Graphic</h1>
              <h2>Explore Our  Design</h2>
            </div>

            <div class="clay-category">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M329.3 99.64l-39.7 10.46c-30.2 26.1-62.7 50.9-96.7 75.1l-6.7 21-34.1 7.3c-22.6 15.3-45.6 30.4-68.82 45.5l120.32 18.4 213.9-167.1c-27.7-3.8-56.9-7.5-88.2-10.66zm103.4 21.56l-61.4 47.9-43 53.1-45 15.7-65 50.7 20.8 115.1c65.6-54.6 127.6-109.4 187-163.1l-5.6-31.2 42.1-1.9c8.3-7.4 16.5-14.9 24.6-22.3zM61.58 277.6c-21.15 39.9-32.01 70.6-36.83 95.8 9.21 1.1 18.3 2.2 27.28 3.5l16.76-30.6 5.52 34c53.29 8.6 103.09 20.5 152.19 32.1l-26.9-117.6-66-10.1z" />
              </svg>
              <p>UI designer</p>
            </div>

            <div class="clay-category">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.382 49.382" xml:space="preserve">
                <g>
                  <path d="M48.654,12.775c-0.333-1.618-1.912-2.886-3.594-2.886h-7.082c-0.159-3.128-0.308-5.418-0.308-5.418
		c-0.692-2.269-1.817-4.059-4.058-4.059H5.745c-2.242,0-3.35,1.767-4.059,4.059c0,0-0.656,11.177-0.589,17.397
		c0.037,6.967,4.344,17.398,4.344,17.398c0.411,1.271,0.912,2.334,1.627,3.058H0.951c-0.957,0-1.239,0.6-0.629,1.337l3.28,3.972
		c0.609,0.738,1.88,1.336,2.837,1.336h28.309c0.957,0,2.116-0.676,2.586-1.509l2.05-3.626c0.472-0.833,0.076-1.51-0.88-1.51h-5.943
		c0.758-0.747,1.279-1.837,1.644-3.058c0,0,1.768-4.524,2.998-9.548l2.222,0.899c0.523,0.212,1.125,0.314,1.736,0.314
		c0.966,0,1.956-0.257,2.705-0.744l2.294-1.494c1.156-0.753,2.238-2.286,2.517-3.566c0.345-1.588,0.746-3.975,0.701-6.329
		C49.332,16.507,48.96,14.258,48.654,12.775z M45.744,24.491c-0.112,0.516-0.729,1.368-1.222,1.689l-2.294,1.494
		c-0.396,0.257-1.241,0.341-1.679,0.162l-2.704-1.093c0.313-1.71,0.516-3.386,0.516-4.875c0-2.686-0.109-5.981-0.24-8.98h6.939
		c0.28,0,0.612,0.281,0.655,0.49c0.28,1.359,0.621,3.413,0.661,5.477C46.417,20.92,46.055,23.059,45.744,24.491z" />
                </g>
              </svg>
              <p>Brand designer</p>
            </div>

            <div class="clay-category">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 344.713 344.713" xml:space="preserve">
                <g>
                  <path d="M190.028,70.017c0.06-0.669,0.095-1.345,0.095-2.029c0-12.498-10.133-22.631-22.631-22.631
		c-12.498,0-22.631,10.133-22.631,22.631c0,0.684,0.036,1.36,0.095,2.029c-28.722,5.488-53.793,21.255-71.226,43.34h187.523
		C243.821,91.272,218.748,75.505,190.028,70.017z" />
                  <path d="M332.677,135.951c-8.831-9.86-21.559-15.291-35.84-15.291c-5.602,0-11.367,0.84-17.137,2.498
		c-10.46,3.005-19.25,6.371-26.63,10.198H64.187L7.977,91.708c-1.518-1.124-3.54-1.298-5.226-0.448C1.064,92.109,0,93.837,0,95.726
		v32.652c0,1.111,0.37,2.191,1.052,3.068l47.147,60.669c1.97,49.349,33.893,90.99,78.086,107.242h82.414
		c30.765-11.314,55.565-34.94,68.472-64.896c1.013,0.297,2.023,0.578,3.028,0.825c4.161,1.024,8.292,1.544,12.28,1.544
		c31.204,0,48.524-30.373,51.847-60.473C346.062,160.627,341.926,146.277,332.677,135.951z M103.088,234.714
		c-1.137,0.645-2.373,0.951-3.593,0.951c-2.54,0-5.008-1.329-6.351-3.695c-6.043-10.652-9.238-22.788-9.237-35.096
		c0-4.028,3.266-7.294,7.294-7.294h0.001c4.028,0,7.293,3.266,7.293,7.295c0,9.789,2.537,19.436,7.337,27.896
		C107.82,228.275,106.591,232.726,103.088,234.714z M139.897,259.392c-1.085,2.95-3.876,4.778-6.846,4.778
		c-0.836,0-1.687-0.145-2.517-0.451c-6.085-2.238-11.844-5.306-17.115-9.119c-3.264-2.361-3.996-6.92-1.636-10.184
		c2.361-3.264,6.921-3.997,10.185-1.636c4.191,3.031,8.768,5.47,13.602,7.249C139.351,251.42,141.289,255.611,139.897,259.392z
		 M314.506,173.064c-1.289,11.679-7.552,33.766-22.028,33.766c-1.573,0-3.291-0.227-5.107-0.674
		c-0.628-0.155-1.264-0.334-1.901-0.524c0.924-5.986,1.413-12.116,1.413-18.361c0-11.623-1.674-22.853-4.773-33.476
		c1.877-0.614,3.833-1.216,5.874-1.803c3.076-0.883,6.055-1.331,8.854-1.331c5.718,0,10.384,1.834,13.493,5.305
		C313.862,159.91,315.307,165.822,314.506,173.064z" />
                </g>
              </svg>
              <p>Web design</p>
            </div>

          </div>

          <div class="large-banner">

            <h2>Explore a World of graphic design</h2>
            <a href="javascript:void(0);" title="Explore">
              Take a Look
            </a>

          </div>

          <hr />

          <div class="featured-clay">

            <div>

              <div></div>

              <div>
                <h3>Super Cool Idea</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

            <div>

              <div></div>

              <div>
                <h3>Fun With Coding</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

            <div>

              <div></div>

              <div>
                <h3>Type of Website</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

            <div>

              <div></div>

              <div>
                <h3>Geaphic Every Day</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

            <div>

              <div></div>

              <div>
                <h3>Special day With Coding</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

            <div>

              <div></div>

              <div>
                <h3>Fun Day</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="javascript:void(0);" title="featured clay">Let's Go</a>
              </div>

            </div>

          </div>

          <hr />

          <div class="featured-users">

            <h2>Featured<br /><span>Codemakers</span></h2>

            <div>

              <div>

                <div></div>

                <div>
                  <h3>Michael Campbell</h3>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg>
                  </div>

                </div>

              </div>

              <div>

                <div>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M329.3 99.64l-39.7 10.46c-30.2 26.1-62.7 50.9-96.7 75.1l-6.7 21-34.1 7.3c-22.6 15.3-45.6 30.4-68.82 45.5l120.32 18.4 213.9-167.1c-27.7-3.8-56.9-7.5-88.2-10.66zm103.4 21.56l-61.4 47.9-43 53.1-45 15.7-65 50.7 20.8 115.1c65.6-54.6 127.6-109.4 187-163.1l-5.6-31.2 42.1-1.9c8.3-7.4 16.5-14.9 24.6-22.3zM61.58 277.6c-21.15 39.9-32.01 70.6-36.83 95.8 9.21 1.1 18.3 2.2 27.28 3.5l16.76-30.6 5.52 34c53.29 8.6 103.09 20.5 152.19 32.1l-26.9-117.6-66-10.1z" />
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.382 49.382" xml:space="preserve">
                    <g>
                      <path d="M48.654,12.775c-0.333-1.618-1.912-2.886-3.594-2.886h-7.082c-0.159-3.128-0.308-5.418-0.308-5.418
		c-0.692-2.269-1.817-4.059-4.058-4.059H5.745c-2.242,0-3.35,1.767-4.059,4.059c0,0-0.656,11.177-0.589,17.397
		c0.037,6.967,4.344,17.398,4.344,17.398c0.411,1.271,0.912,2.334,1.627,3.058H0.951c-0.957,0-1.239,0.6-0.629,1.337l3.28,3.972
		c0.609,0.738,1.88,1.336,2.837,1.336h28.309c0.957,0,2.116-0.676,2.586-1.509l2.05-3.626c0.472-0.833,0.076-1.51-0.88-1.51h-5.943
		c0.758-0.747,1.279-1.837,1.644-3.058c0,0,1.768-4.524,2.998-9.548l2.222,0.899c0.523,0.212,1.125,0.314,1.736,0.314
		c0.966,0,1.956-0.257,2.705-0.744l2.294-1.494c1.156-0.753,2.238-2.286,2.517-3.566c0.345-1.588,0.746-3.975,0.701-6.329
		C49.332,16.507,48.96,14.258,48.654,12.775z M45.744,24.491c-0.112,0.516-0.729,1.368-1.222,1.689l-2.294,1.494
		c-0.396,0.257-1.241,0.341-1.679,0.162l-2.704-1.093c0.313-1.71,0.516-3.386,0.516-4.875c0-2.686-0.109-5.981-0.24-8.98h6.939
		c0.28,0,0.612,0.281,0.655,0.49c0.28,1.359,0.621,3.413,0.661,5.477C46.417,20.92,46.055,23.059,45.744,24.491z" />
                    </g>
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 344.713 344.713" xml:space="preserve">
                    <g>
                      <path d="M190.028,70.017c0.06-0.669,0.095-1.345,0.095-2.029c0-12.498-10.133-22.631-22.631-22.631
		c-12.498,0-22.631,10.133-22.631,22.631c0,0.684,0.036,1.36,0.095,2.029c-28.722,5.488-53.793,21.255-71.226,43.34h187.523
		C243.821,91.272,218.748,75.505,190.028,70.017z" />
                      <path d="M332.677,135.951c-8.831-9.86-21.559-15.291-35.84-15.291c-5.602,0-11.367,0.84-17.137,2.498
		c-10.46,3.005-19.25,6.371-26.63,10.198H64.187L7.977,91.708c-1.518-1.124-3.54-1.298-5.226-0.448C1.064,92.109,0,93.837,0,95.726
		v32.652c0,1.111,0.37,2.191,1.052,3.068l47.147,60.669c1.97,49.349,33.893,90.99,78.086,107.242h82.414
		c30.765-11.314,55.565-34.94,68.472-64.896c1.013,0.297,2.023,0.578,3.028,0.825c4.161,1.024,8.292,1.544,12.28,1.544
		c31.204,0,48.524-30.373,51.847-60.473C346.062,160.627,341.926,146.277,332.677,135.951z M103.088,234.714
		c-1.137,0.645-2.373,0.951-3.593,0.951c-2.54,0-5.008-1.329-6.351-3.695c-6.043-10.652-9.238-22.788-9.237-35.096
		c0-4.028,3.266-7.294,7.294-7.294h0.001c4.028,0,7.293,3.266,7.293,7.295c0,9.789,2.537,19.436,7.337,27.896
		C107.82,228.275,106.591,232.726,103.088,234.714z M139.897,259.392c-1.085,2.95-3.876,4.778-6.846,4.778
		c-0.836,0-1.687-0.145-2.517-0.451c-6.085-2.238-11.844-5.306-17.115-9.119c-3.264-2.361-3.996-6.92-1.636-10.184
		c2.361-3.264,6.921-3.997,10.185-1.636c4.191,3.031,8.768,5.47,13.602,7.249C139.351,251.42,141.289,255.611,139.897,259.392z
		 M314.506,173.064c-1.289,11.679-7.552,33.766-22.028,33.766c-1.573,0-3.291-0.227-5.107-0.674
		c-0.628-0.155-1.264-0.334-1.901-0.524c0.924-5.986,1.413-12.116,1.413-18.361c0-11.623-1.674-22.853-4.773-33.476
		c1.877-0.614,3.833-1.216,5.874-1.803c3.076-0.883,6.055-1.331,8.854-1.331c5.718,0,10.384,1.834,13.493,5.305
		C313.862,159.91,315.307,165.822,314.506,173.064z" />
                    </g>
                  </svg>
                </div>

              </div>

            </div>

            <div>

              <div>

                <div></div>

                <div>
                  <h3>George Lee</h3>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg>
                  </div>

                </div>

              </div>

              <div>

                <div>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M329.3 99.64l-39.7 10.46c-30.2 26.1-62.7 50.9-96.7 75.1l-6.7 21-34.1 7.3c-22.6 15.3-45.6 30.4-68.82 45.5l120.32 18.4 213.9-167.1c-27.7-3.8-56.9-7.5-88.2-10.66zm103.4 21.56l-61.4 47.9-43 53.1-45 15.7-65 50.7 20.8 115.1c65.6-54.6 127.6-109.4 187-163.1l-5.6-31.2 42.1-1.9c8.3-7.4 16.5-14.9 24.6-22.3zM61.58 277.6c-21.15 39.9-32.01 70.6-36.83 95.8 9.21 1.1 18.3 2.2 27.28 3.5l16.76-30.6 5.52 34c53.29 8.6 103.09 20.5 152.19 32.1l-26.9-117.6-66-10.1z" />
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.382 49.382" xml:space="preserve">
                    <g>
                      <path d="M48.654,12.775c-0.333-1.618-1.912-2.886-3.594-2.886h-7.082c-0.159-3.128-0.308-5.418-0.308-5.418
		c-0.692-2.269-1.817-4.059-4.058-4.059H5.745c-2.242,0-3.35,1.767-4.059,4.059c0,0-0.656,11.177-0.589,17.397
		c0.037,6.967,4.344,17.398,4.344,17.398c0.411,1.271,0.912,2.334,1.627,3.058H0.951c-0.957,0-1.239,0.6-0.629,1.337l3.28,3.972
		c0.609,0.738,1.88,1.336,2.837,1.336h28.309c0.957,0,2.116-0.676,2.586-1.509l2.05-3.626c0.472-0.833,0.076-1.51-0.88-1.51h-5.943
		c0.758-0.747,1.279-1.837,1.644-3.058c0,0,1.768-4.524,2.998-9.548l2.222,0.899c0.523,0.212,1.125,0.314,1.736,0.314
		c0.966,0,1.956-0.257,2.705-0.744l2.294-1.494c1.156-0.753,2.238-2.286,2.517-3.566c0.345-1.588,0.746-3.975,0.701-6.329
		C49.332,16.507,48.96,14.258,48.654,12.775z M45.744,24.491c-0.112,0.516-0.729,1.368-1.222,1.689l-2.294,1.494
		c-0.396,0.257-1.241,0.341-1.679,0.162l-2.704-1.093c0.313-1.71,0.516-3.386,0.516-4.875c0-2.686-0.109-5.981-0.24-8.98h6.939
		c0.28,0,0.612,0.281,0.655,0.49c0.28,1.359,0.621,3.413,0.661,5.477C46.417,20.92,46.055,23.059,45.744,24.491z" />
                    </g>
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 344.713 344.713" xml:space="preserve">
                    <g>
                      <path d="M190.028,70.017c0.06-0.669,0.095-1.345,0.095-2.029c0-12.498-10.133-22.631-22.631-22.631
		c-12.498,0-22.631,10.133-22.631,22.631c0,0.684,0.036,1.36,0.095,2.029c-28.722,5.488-53.793,21.255-71.226,43.34h187.523
		C243.821,91.272,218.748,75.505,190.028,70.017z" />
                      <path d="M332.677,135.951c-8.831-9.86-21.559-15.291-35.84-15.291c-5.602,0-11.367,0.84-17.137,2.498
		c-10.46,3.005-19.25,6.371-26.63,10.198H64.187L7.977,91.708c-1.518-1.124-3.54-1.298-5.226-0.448C1.064,92.109,0,93.837,0,95.726
		v32.652c0,1.111,0.37,2.191,1.052,3.068l47.147,60.669c1.97,49.349,33.893,90.99,78.086,107.242h82.414
		c30.765-11.314,55.565-34.94,68.472-64.896c1.013,0.297,2.023,0.578,3.028,0.825c4.161,1.024,8.292,1.544,12.28,1.544
		c31.204,0,48.524-30.373,51.847-60.473C346.062,160.627,341.926,146.277,332.677,135.951z M103.088,234.714
		c-1.137,0.645-2.373,0.951-3.593,0.951c-2.54,0-5.008-1.329-6.351-3.695c-6.043-10.652-9.238-22.788-9.237-35.096
		c0-4.028,3.266-7.294,7.294-7.294h0.001c4.028,0,7.293,3.266,7.293,7.295c0,9.789,2.537,19.436,7.337,27.896
		C107.82,228.275,106.591,232.726,103.088,234.714z M139.897,259.392c-1.085,2.95-3.876,4.778-6.846,4.778
		c-0.836,0-1.687-0.145-2.517-0.451c-6.085-2.238-11.844-5.306-17.115-9.119c-3.264-2.361-3.996-6.92-1.636-10.184
		c2.361-3.264,6.921-3.997,10.185-1.636c4.191,3.031,8.768,5.47,13.602,7.249C139.351,251.42,141.289,255.611,139.897,259.392z
		 M314.506,173.064c-1.289,11.679-7.552,33.766-22.028,33.766c-1.573,0-3.291-0.227-5.107-0.674
		c-0.628-0.155-1.264-0.334-1.901-0.524c0.924-5.986,1.413-12.116,1.413-18.361c0-11.623-1.674-22.853-4.773-33.476
		c1.877-0.614,3.833-1.216,5.874-1.803c3.076-0.883,6.055-1.331,8.854-1.331c5.718,0,10.384,1.834,13.493,5.305
		C313.862,159.91,315.307,165.822,314.506,173.064z" />
                    </g>
                  </svg>
                </div>

              </div>

            </div>

            <div>

              <div>

                <div></div>

                <div>
                  <h3>Sandra Walker</h3>

                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                    </svg>
                  </div>

                </div>

              </div>

              <div>

                <div>
                  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M329.3 99.64l-39.7 10.46c-30.2 26.1-62.7 50.9-96.7 75.1l-6.7 21-34.1 7.3c-22.6 15.3-45.6 30.4-68.82 45.5l120.32 18.4 213.9-167.1c-27.7-3.8-56.9-7.5-88.2-10.66zm103.4 21.56l-61.4 47.9-43 53.1-45 15.7-65 50.7 20.8 115.1c65.6-54.6 127.6-109.4 187-163.1l-5.6-31.2 42.1-1.9c8.3-7.4 16.5-14.9 24.6-22.3zM61.58 277.6c-21.15 39.9-32.01 70.6-36.83 95.8 9.21 1.1 18.3 2.2 27.28 3.5l16.76-30.6 5.52 34c53.29 8.6 103.09 20.5 152.19 32.1l-26.9-117.6-66-10.1z" />
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 49.382 49.382" xml:space="preserve">
                    <g>
                      <path d="M48.654,12.775c-0.333-1.618-1.912-2.886-3.594-2.886h-7.082c-0.159-3.128-0.308-5.418-0.308-5.418
		c-0.692-2.269-1.817-4.059-4.058-4.059H5.745c-2.242,0-3.35,1.767-4.059,4.059c0,0-0.656,11.177-0.589,17.397
		c0.037,6.967,4.344,17.398,4.344,17.398c0.411,1.271,0.912,2.334,1.627,3.058H0.951c-0.957,0-1.239,0.6-0.629,1.337l3.28,3.972
		c0.609,0.738,1.88,1.336,2.837,1.336h28.309c0.957,0,2.116-0.676,2.586-1.509l2.05-3.626c0.472-0.833,0.076-1.51-0.88-1.51h-5.943
		c0.758-0.747,1.279-1.837,1.644-3.058c0,0,1.768-4.524,2.998-9.548l2.222,0.899c0.523,0.212,1.125,0.314,1.736,0.314
		c0.966,0,1.956-0.257,2.705-0.744l2.294-1.494c1.156-0.753,2.238-2.286,2.517-3.566c0.345-1.588,0.746-3.975,0.701-6.329
		C49.332,16.507,48.96,14.258,48.654,12.775z M45.744,24.491c-0.112,0.516-0.729,1.368-1.222,1.689l-2.294,1.494
		c-0.396,0.257-1.241,0.341-1.679,0.162l-2.704-1.093c0.313-1.71,0.516-3.386,0.516-4.875c0-2.686-0.109-5.981-0.24-8.98h6.939
		c0.28,0,0.612,0.281,0.655,0.49c0.28,1.359,0.621,3.413,0.661,5.477C46.417,20.92,46.055,23.059,45.744,24.491z" />
                    </g>
                  </svg>
                </div>

                <div>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 344.713 344.713" xml:space="preserve">
                    <g>
                      <path d="M190.028,70.017c0.06-0.669,0.095-1.345,0.095-2.029c0-12.498-10.133-22.631-22.631-22.631
		c-12.498,0-22.631,10.133-22.631,22.631c0,0.684,0.036,1.36,0.095,2.029c-28.722,5.488-53.793,21.255-71.226,43.34h187.523
		C243.821,91.272,218.748,75.505,190.028,70.017z" />
                      <path d="M332.677,135.951c-8.831-9.86-21.559-15.291-35.84-15.291c-5.602,0-11.367,0.84-17.137,2.498
		c-10.46,3.005-19.25,6.371-26.63,10.198H64.187L7.977,91.708c-1.518-1.124-3.54-1.298-5.226-0.448C1.064,92.109,0,93.837,0,95.726
		v32.652c0,1.111,0.37,2.191,1.052,3.068l47.147,60.669c1.97,49.349,33.893,90.99,78.086,107.242h82.414
		c30.765-11.314,55.565-34.94,68.472-64.896c1.013,0.297,2.023,0.578,3.028,0.825c4.161,1.024,8.292,1.544,12.28,1.544
		c31.204,0,48.524-30.373,51.847-60.473C346.062,160.627,341.926,146.277,332.677,135.951z M103.088,234.714
		c-1.137,0.645-2.373,0.951-3.593,0.951c-2.54,0-5.008-1.329-6.351-3.695c-6.043-10.652-9.238-22.788-9.237-35.096
		c0-4.028,3.266-7.294,7.294-7.294h0.001c4.028,0,7.293,3.266,7.293,7.295c0,9.789,2.537,19.436,7.337,27.896
		C107.82,228.275,106.591,232.726,103.088,234.714z M139.897,259.392c-1.085,2.95-3.876,4.778-6.846,4.778
		c-0.836,0-1.687-0.145-2.517-0.451c-6.085-2.238-11.844-5.306-17.115-9.119c-3.264-2.361-3.996-6.92-1.636-10.184
		c2.361-3.264,6.921-3.997,10.185-1.636c4.191,3.031,8.768,5.47,13.602,7.249C139.351,251.42,141.289,255.611,139.897,259.392z
		 M314.506,173.064c-1.289,11.679-7.552,33.766-22.028,33.766c-1.573,0-3.291-0.227-5.107-0.674
		c-0.628-0.155-1.264-0.334-1.901-0.524c0.924-5.986,1.413-12.116,1.413-18.361c0-11.623-1.674-22.853-4.773-33.476
		c1.877-0.614,3.833-1.216,5.874-1.803c3.076-0.883,6.055-1.331,8.854-1.331c5.718,0,10.384,1.834,13.493,5.305
		C313.862,159.91,315.307,165.822,314.506,173.064z" />
                    </g>
                  </svg>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      
    </div>

  </div>

</div>
</header>
  </>
  )
}

