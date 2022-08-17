import style from "../css/navbar.module.css"
function Navbar() {
    return (
    <div style={{color: "red", backgroundImage: "gotv-login-bg.jpg/pc/download",height:500}}>
        <h1>this is my navbar</h1>
        <button className="btn" >submit</button>
        <p className={style.mypar}>This is to test css module</p>
    </div>

    )
}
export default Navbar