import './footer.css';
import Link from "next/link"

export default function Footer() {

    const createDocumentBtn = {

        fontSize: "22px",
        backgroundColor: "#777777", /* #779B29 */
        color: "#ffffff",
        border: "0px",
        borderRadius: "6px",
        width: "380px",
        height: "56px",
        padding: "10px",
        cursor: "pointer",
        margin: "0px"
    
      }

  return (

    <footer className="footer">
        <Link href="/add-post"><button style={createDocumentBtn}>Create New Document</button></Link>
    </footer>

  )

}
 