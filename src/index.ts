class UserCard extends HTMLElement {
    selector: string;
    _text: string;
    static observedAttributes = ['[text]', 'title'];
    // 元素传递属性
    constructor() {
        super();
        // 处理dom
        // 处理样式
        this.selector = "初始化构造";
        this._text = '';
        // 拿到所有属性
        // this.findAttribute();
        // const shadow = this.attachShadow({ mode: "open" });
        // 增加默认slot
        // const defaultSlot = document.createElement("slot");
        // shadow.appendChild(defaultSlot);
        // 添加样式
        const customStyle = document.createElement("style");
        customStyle.innerHTML = this.cusotmStyle('user-card');
        document.head.appendChild(customStyle);
    }

    cusotmStyle(host: string) {
        return `
         ${host} {
           display: flex;
           align-items: center;
           width: 450px;
           height: 180px;
           background-color: #d4d4d4;
           border: 1px solid #d5d5d5;
           box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
           border-radius: 3px;
           overflow: hidden;
           padding: 10px;
           box-sizing: border-box;
           font-family: 'Poppins', sans-serif;
         }
         .image {
           flex: 0 0 auto;
           width: 160px;
           height: 160px;
           vertical-align: middle;
           border-radius: 5px;
         }
         .container {
           box-sizing: border-box;
           padding: 20px;
           height: 160px;
         }
         .container > .name {
           font-size: 20px;
           font-weight: 600;
           line-height: 1;
           margin: 0;
           margin-bottom: 5px;
         }
         .container > .email {
           font-size: 12px;
           opacity: 0.75;
           line-height: 1;
           margin: 0;
           margin-bottom: 15px;
         }
         .container > .button {
           padding: 10px 25px;
           font-size: 12px;
           border-radius: 5px;
           text-transform: uppercase;
         }`
    }

    // get text () {
    //     return this._text;
    // }
    // set text(v) {
    //     console.log(v, 'ss')
    //     // this.setAttribute('text', v)
    // }

    // 遍历属性
    findAttribute() {
        for (let i = 0; i < this.attributes.length; i++) {
            console.log(this.attributes.item(i));
        }
    }
    // 设置内容属性
    setCustomAttribute() {
        this.querySelector("img")!.setAttribute("src", this.getAttribute("@image") as any);
        (this.querySelector(".container>.name") as any).innerText = this.getAttribute("name");
        (this.querySelector(".container>.email") as any).innerText = this.getAttribute("email");
    }
    connectedCallback() {
        console.log("Custom square element added to page.");
        this.updateRander();
    }
    disconnectedCallback() {
        console.log("Custom square element removed from page.");
    }
    adoptedCallback() {
        console.log("Custom square element moved to new page.");
    }
    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log("设置了" + name + "属性。 为：" + newValue);
    }
    // 初始化渲染
    updateRander() {
        // this.setCustomAttribute();
    }
}
// 注册标签
customElements.define("user-card", UserCard);

