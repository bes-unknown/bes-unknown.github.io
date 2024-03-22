// Index

// Rendering Homepage

var table_of_contents; // html element
var toc_cnt = []; // Count of each level of headers
var toc_line = function(id,level,text) {
    var line = document.createElement("div");
        var link = document.createElement("a");
            link.href = `#${id}`;
                var new_cnt = [];
                for (var i = 0; i < level; i++) {
                    new_cnt.push(toc_cnt[i] || 0);
                }
                new_cnt[level - 1] ++;
                var new_id = new_cnt.join(".");
                toc_cnt = new_cnt;
            link.textContent = `${new_id} ${text}`;
            link.style.setProperty("color", "white");
            link.style.setProperty("text-decoration", "none");
            link.style.setProperty("font-family", "monospace");
            link.style.setProperty("font-size", "12px");
        
        line.appendChild(link);
        line.style.setProperty("display", "block");
        line.style.setProperty("position", "relative");
        line.style.setProperty("left", `${level * 20}px`);
    table_of_contents.appendChild(line);
    return toc_cnt;
}

window.onload = function() {
    var body = document.body;
    body.style.setProperty("margin", "0px");
    body.style.setProperty("background", "black");
        var left_sidebar = document.createElement("aside");
            left_sidebar.style.setProperty("width", "20%");
            left_sidebar.style.setProperty("border-right", "1px solid white");
            left_sidebar.style.setProperty("height", "100vh");
            left_sidebar.style.setProperty("display", "inline-block");
            var header = document.createElement("header");
                header.style.setProperty("display", "flex");
                header.style.setProperty("top", "0px");
                header.style.setProperty("padding", "0px");
                header.style.setProperty("background", "black");
                header.style.setProperty("border-bottom", "1px solid white");
                header.style.setProperty("height", "120px");
                var pageinfo = document.createElement("div");
                    var profile_pic = document.createElement("img");
                        profile_pic.src = "img/profile_pic.jpg";
                        profile_pic.style.setProperty("width", "80px");
                        profile_pic.style.setProperty("height", "80px");
                        profile_pic.style.setProperty("border", "2px solid white");
                        profile_pic.style.setProperty("border-radius", "50%");
                        profile_pic.style.setProperty("margin", "20px 0px 0px 20px");
                        profile_pic.setAttribute("alt", "Profile Picture");
                    pageinfo.appendChild(profile_pic);
                var userinfo = document.createElement("div");
                    userinfo.style.setProperty("color", "white");
                    userinfo.style.setProperty("margin", "20px 0px 0px 20px");
                    userinfo.style.setProperty("font-family", "monospace");
                    userinfo.style.setProperty("text-align","center")
                    var username = document.createElement("p");
                        username.style.setProperty("color", "white");
                        username.style.setProperty("margin", "0px");
                        username.style.setProperty("padding", "0px");
                        username.style.setProperty("font-size", "20px");
                        username.textContent = "bes-unknown";
                    var githublink = document.createElement("a");
                        githublink.style.setProperty("color", "white");
                        githublink.style.setProperty("text-decoration", "none");
                        githublink.textContent = "(github page)";
                        githublink.href = "https://github.com/bes-unknown";
                    var profile_msg = document.createElement("p");
                        profile_msg.style.setProperty("color", "gray");
                        profile_msg.style.setProperty("margin", "0px");
                        profile_msg.style.setProperty("padding", "0px");
                        profile_msg.textContent = "An undergraduate from China.";
                    userinfo.appendChild(username);
                    userinfo.appendChild(githublink);
                    userinfo.appendChild(profile_msg);
            header.appendChild(pageinfo);
            header.appendChild(userinfo);
            table_of_contents = document.createElement("div");
                table_of_contents.style.setProperty("color", "white");
                table_of_contents.style.setProperty("overflow-y", "scroll");
                table_of_contents.style.setProperty("height", "calc(100vh - 120px)");
        left_sidebar.appendChild(header);
        left_sidebar.appendChild(table_of_contents);

        var main = document.createElement("main");
            main.style.setProperty("color", "white");
            main.style.setProperty("width", "60%");
            main.style.setProperty("display", "inline-block");
            main.style.setProperty("height", "100vh");
            main.style.setProperty("overflow-y", "scroll");


        var right_sidebar = document.createElement("aside");
            right_sidebar.style.setProperty("width", "20%");
    body.appendChild(left_sidebar);
    body.appendChild(main);
    body.appendChild(right_sidebar);

    toc_test(main);
}

/* Tests
    var toc_test = function(main) {
        for (let i = 0; i < 10; i++) {
            let element = document.createElement("div");
            element.id = `First ${i}`;
            element.textContent = `First ${i}`;
            main.appendChild(element);
            toc_line(element.id, 1, element.textContent);
            for (let j = 0; j < 10; j++) {
                let element = document.createElement("div");
                element.id = `Second ${i}.${j}`;
                element.textContent = `Second ${i}.${j}`;
                main.appendChild(element);
                toc_line(element.id, 2, element.textContent);
                for (let k = 0; k < 10; k++) {
                    let element = document.createElement("div");
                    element.id = `Third ${i}.${j}.${k}`;
                    element.textContent = `Third ${i}.${j}.${k}`;
                    main.appendChild(element);
                    toc_line(element.id, 3, element.textContent);
                }
            }
        }
    }
 */


    var toc_test = function(main) {
        for (let i = 0; i < 10; i++) {
            let element = document.createElement("div");
            element.id = `First ${i}`;
            element.textContent = `First ${i}`;
            main.appendChild(element);
            toc_line(element.id, 1, element.textContent);
            for (let j = 0; j < 10; j++) {
                let element = document.createElement("div");
                element.id = `Second ${i}.${j}`;
                element.textContent = `Second ${i}.${j}`;
                main.appendChild(element);
                toc_line(element.id, 2, element.textContent);
                for (let k = 0; k < 10; k++) {
                    let element = document.createElement("div");
                    element.id = `Third ${i}.${j}.${k}`;
                    element.textContent = `Third ${i}.${j}.${k}`;
                    main.appendChild(element);
                    toc_line(element.id, 3, element.textContent);
                }
            }
        }
    }