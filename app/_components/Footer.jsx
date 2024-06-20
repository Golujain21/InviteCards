import React from 'react'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
Link
const Footer = () => {
  const popularSerch = ["Wedding Invitation Cards","Mehndi invitation Cards","Tilak Invitation Cards", "Haldi Invitation Cards","Sangeet Invitation Cards","Engagement Invitation Cards","Wedding Invitation Cards"," Marathi Wedding Invitation Cards","Ring Ceremony Invitation Cards", "Marathi Theme invitation","Marathi Cards Cards In English", "Wedding Invitation For Jain","Punjabi Invitation Cards Cards","Jain Wedding Invitation Cards Templates","Bridal Shower Invitation Cards","Punjabi Wedding Invitation","House Warming Invitation Cards", "Reception Invitation Cards" , "South Indian Wedding Invitation","Save The Date Invitation Cards"," Rajasthani Wedding Invitation","Marwari Theme Cards Invitation","Jain Wedding Invitation Cards" ] 
  return (
    <section className="all_buttons-section">
        <Container fluid> 
            <div className="POPULAR_SEARCHES"> POPULAR SEARCHES </div>
            <hr/>
            {
              popularSerch?.map((popular,i)=>{
                return(
                  <Link key={i} style={{textDecoration:"none",}} href="/cards/hindi"> {popular}</Link>
              )
              })
            }
            <Link href="/cards/english"> Grah Pravesh Invitation</Link>
            <Link href="/cards/english"> House Warming Ceremony Invite</Link>
            <Link href=" /cards/english"> Baby Shower Cards Invitation</Link>
            <Link href="/cards/english"> Godh Bharai Invitations Cards</Link>

            <Link href="/cards/english"> Greeting Cardss</Link>
            <Link href="/cards/english"> Greetings Invitations</Link>
            <Link href="/cards/english"> Greeting For Birthday</Link>
            <Link href="/cards/english"> Greeting For Congratulation</Link>
            <Link href="/cards/english"> Thank You greeting Cards</Link>
            <Link href="/cards/english"> Devotional Cards Invitation</Link>

            <Link href="/cards/english"> Birthday Wishes Greeting </Link>
            <Link href="/cards/english"> Greeting Cardss For Birthday</Link>
            <Link href="/cards/english">Superhero Birthday Invitation </Link>
            <Link href="/cards/english"> Thank You greeting Cards</Link>

            <Link href="/cards/hindi"> Superhero Birthday Invitation</Link>
            <Link href="/cards/hindi"> Superhero Theme Cards Invitations</Link>
            <Link href="/cards/hindi"> Anniversary Invitation Cards</Link>
            <Link href="/cards/hindi"> Anniversary Invitation Templates</Link>
            
            <Link href="/cards/marathi"> Marathi Invitation In Marathi </Link>
            <Link href="/cards/marathi"> Marathi Wedding Theme In Marathi  </Link>
            <Link href="/cards/marathi"> Sakharpuda Invitation Cards</Link>
            <Link href="/cards/marathi"> Wedding Invitation In Marathi </Link>
            <Link href="/cards/marathi"> Cards Invitation In Marathi </Link>
            <Link href="/cards/marathi"> Marathi Invitation Card For Marriage </Link>
            <Link href="/cards/marathi"> Invitation Card For Marriage In Marathi </Link>
            <Link href="/cards/marathi"> Marriage Card In Marathi </Link>
            <Link href="/cards/marathi"> Marathi Invitation Card Online Free </Link>
            <Link href="/cards/marathi"> Marathi Marriage Cards </Link>
            <Link href="/cards/marathi"> Wedding Invitation Card Maker In Marathi </Link>
            <Link href="/cards/marathi">Marathi Sakharpuda Invitation Card</Link>

            <Link href="/cards/hindi">Wedding Invitation In Hindi </Link>
            <Link href="/cards/hindi">Hindi Template For Wedding </Link>
            <Link href="/cards/hindi">Hindi Template For Wedding </Link>
            <Link href="/cards/hindi">Hindi Invitation For Wedding </Link>
            <Link href="/cards/hindi">Hindi Wedding Invitation Cards </Link>
            <Link href="/cards/hindi">Invitation In Hindi For Wedding </Link>

            <Link href="/cards/hindi">Premium Invitation Cards </Link>
            <Link href="/cards/hindi">Buy Premium Invitation Cards </Link>

            <Link href="/cards/hindi">Birthday Invitation Cards </Link>
            <Link href="/cards/hindi"> Birthday Invitation Card In Marathi </Link>
            <Link href="/cards/hindi"> Birthday Invitation Card In Hindi </Link>

            <Link href="/cards/hindi"> New Home Invitation Card In Marathi </Link>
            <Link href="/cards/hindi"> New Home Invitation Cards Card </Link>
            <Link href="/cards/hindi"> New Home Invitation Cards In Hindi </Link>
            <Link href="/cards/hindi"> House Warming Invitation Card In Hindi </Link>


            <Link href="/cards/hindi">Haldi Mehndi Invitation Card</Link>

            <Link href="/cards/hindi">Haldi Ceremony Invites</Link>

            <Link href="/cards/hindi">Happy Anniversary Cards Card</Link>
            
            <Link href="/cards/hindi">Sangeet Invitation Cards</Link>

            <Link href="/cards/hindi">Punjabi Wedding Cards Template</Link>

            <Link href="/cards/hindi">Hindi Birthday Invitation Card </Link>
    
        </Container>
    </section>
  )
}

export default Footer