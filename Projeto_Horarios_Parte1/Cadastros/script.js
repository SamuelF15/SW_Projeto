function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let sidebarWidth = window.innerWidth <= 768 ? "-200px" : "-250px"; // Ajusta dinamicamente
    
    // Se o menu estiver fechado, abre; se estiver aberto, fecha
    if (sidebar.style.left === sidebarWidth || sidebar.style.left === "") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = sidebarWidth;
    }
}
