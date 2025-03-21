var sidebar = document.getElementById("sidebar");
            var toggleButton = document.getElementById("toggleSidebar");
            
            toggleButton.addEventListener("click", function() {
                sidebar.classList.toggle("hidden");
                if (sidebar.classList.contains("hidden")) {
                    toggleButton.classList.add("hidden");
                } else {
                    toggleButton.classList.remove("hidden");
                }
            });