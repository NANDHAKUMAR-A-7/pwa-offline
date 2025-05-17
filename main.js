console.log("Main JS loaded.");


// push notification 

const button = document.getElementById("button");

 button.addEventListener("click", () => {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("The user accepted");
                const notification = new Notification("Example notification", {
                    body: Math.random(),
                    data: {hello:"world"},
                    icon:"/"
                })

                notification.addEventListener("error", e => {
                    alert("error")
                })
            }
        });
    });

 //push notification for user when they leave website or app.
let notification
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        notification = new Notification("come back please",{
            body:"please",
            tag:"come Back",
        })
    }else{
        notification.close()
    }
})