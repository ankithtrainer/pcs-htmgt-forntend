import React from 'react'

const Dashboard = () => {
  return (
    <>
     <div id="wrapper">
            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div className="sidebar-brand-text mx-3"><img src="../a-z-admin/img/logo-2.png" className="img-fluid" alt="Logo"/></div>
                </a>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider my-0" />
                {/* Nav Item - Dashboard */}
                <li className="nav-item">
                    <a className="nav-link" href="tables.html">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Table</span>
                    </a>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Nav Item - Reports Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseReports"
                        aria-expanded="true" aria-controls="collapseReports">
                        <i className="fas fa-fw fa-wrench"></i>
                        <span>Reports</span>
                    </a>
                    <div id="collapseReports" className="collapse" aria-labelledby="headingUtilities"
                        data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="404.html">404 Page</a>
                            <a className="collapse-item" href="blank.html">Blank Page</a>
                        </div>
                    </div>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider" />
                {/* Nav Item - Manage User Collapse Menu */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                        aria-expanded="true" aria-controls="collapsePages">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Manage User</span>
                    </a>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <a className="collapse-item" href="login.html">Login</a>
                            <a className="collapse-item" href="register.html">Register</a>
                            <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                        </div>
                    </div>
                </li>
                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block" />
                {/* Sidebar Toggler (Sidebar) */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>
                        {/* Topbar Search */}
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                    aria-label="Search" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">
                            {/* Nav Item - Search Dropdown (Visible Only XS) */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-search fa-fw"></i>
                                </a>
                                {/* Dropdown - Messages */}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                    aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small"
                                                placeholder="Search for..." aria-label="Search"
                                                aria-describedby="basic-addon2" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            {/* Nav Item - Alerts */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/* Counter - Alerts */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>
                                {/* Dropdown - Alerts */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                    aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">
                                        Alerts Center
                                    </h6>
                                    <a className="dropdown-item d-flex align-items-center" href="#">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary">
                                                <i className="fas fa-file-alt text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </a>
                                    {/* Other alert items... */}
                                </div>
                            </li>
                            {/* Other topbar items... */}
                        </ul>
                    </nav>
                    {/* End of Topbar */}
                    {/* Begin Page Content */}
                    <div className="container-fluid">
                        {/* Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Dashboard : Enterprise Resource Planning (ERP)</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                    className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        {/* Content Row */}
                        <div className="row">
                            {/* Cards */}
                            {/* Card 1 */}
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    <font color="red" style={{ fontSize: "24px" }}>1.</font> Employee Attendance Management
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">Track Employees Attendance</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    <font color="red" style={{ fontSize: "24px" }}>1.</font> Employee Attendance Management
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">Track Employees Attendance</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    <font color="red" style={{ fontSize: "24px" }}>1.</font> Employee Attendance Management
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">Track Employees Attendance</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                    <font color="red" style={{ fontSize: "24px" }}>1.</font> Employee Attendance Management
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800">Track Employees Attendance</div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Other cards... */}
                        </div>
                        {/* End of Content Row */}
                    </div>
                    {/* End of Container-fluid */}
                </div>
                {/* End of Content */}
                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; A-2-Z 2023</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
        </div>
        {/* End of Wrapper */}
        {/* Scroll to Top Button */}
        <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
        </a>
        {/* Logout Modal */}
        <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            {/* Modal content... */}
        </div>


    </>
  )
}

export default Dashboard