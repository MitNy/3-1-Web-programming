/* Add ToDo Modal 열기 */
function openAddModal() {
    "use strict";
    document.getElementById("addModal").style.display = "block";
}

/* Add toDo Modal 닫기 */
function closeAddModal() {
    "use strict";
    document.getElementById("addModal").style.display = "none";
}

/* Modify Modal 닫기 */
function closeModifyModal() {
    "use strict";
    document.getElementById("modifyModal").style.display = "none";
}

/* Modal 창 밖 영역 클릭시 Modal 닫기 */
window.onclick = function (event) {
    "use strict";
    if (event.target === document.getElementById("addModal")) {
        document.getElementById("addModal").style.display = "none";
    } else if (event.target === document.getElementById("modifyModal")) {
        document.getElementById("modifyModal").style.display = "none";
    }
}

