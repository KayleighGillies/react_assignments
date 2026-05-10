
function About() {
    return (
        <div className="about-grid">
            <section className="about-project">
            <h1>About this Project</h1>
                <p>This project provides a list of some of my favorite artists to explore with elementary-aged students. The artists are displayed in a card format, with their name, a photo of the artist, an image of one of their artworks, and a brief biography.</p>
                <p>Overall, this project serves as a resource for educators and students alike to discover and learn about different artists and their work in a fun and interactive way.</p>
                <p>The project is built using React, a popular JavaScript library for building user interfaces. The artists are stored in a separate file and imported into the main component, allowing for easy updates and additions to the list. The project also includes basic styling to make the cards engaging, visually appealing, and easy to read.</p>
            </section>
            <section className="about-kayleigh">
                <div className="about-kayleigh__portrait-panel">
                    <img className="about-kayleigh__portrait" src="./about/kayleigh_portrait.png" alt="Portrait of Kayleigh Maier Gillies" />
                    <h1 className="about-kayleigh__title">About Kayleigh</h1>
                </div> 
                <p>Kayleigh Maier Gillies is a designer and fine artist, dividing her time between Portland, Oregon and New Orleans, Louisiana. As an artist, she works primarily in oil paint, drawn to the figure and the small, uncanny moments in ordinary life that reveal something authentic about a person before their awareness of being seen. Her portraits and narrative scenes are grounded in close observation and a sensitivity to the stillness of unguarded moments. Alongside her studio practice, she is developing a professional focus in graphic design and web design through her graduate work at MCAD.
                </p>
                <p>Her life in New Orleans has immersed her in a city where creative expression is a collective practice — where elaborate costume and wearable art are built each year by a vast cross-section of people, most of whom would not identify as artists, carrying forward a tradition with deep roots in the city's layered cultural history. She participates in that tradition, creating wearable objects that exist as much in community ritual as in any studio context. She brings this same openness to her broader material life, working across ceramics, printmaking, natural dyeing, and fiber, with an appetite for process and a willingness to arrive at technique through her own means.
                </p>
                <p>She holds a Bachelor of Fine Arts in Studio Art from Tulane University and is currently completing a Master of Arts in Graphic Design and Web Development at the Minneapolis College of Art and Design.
                </p>
                <p>As an educator, Kayleigh spent nearly fifteen years teaching visual art at Isidore Newman School in New Orleans, where she developed a program grounded in rigorous studio practice, contemporary art inquiry, and the belief that artmaking is fundamentally a way of thinking. Her teaching was shaped by Harvard's Studio Habits of Mind, Design Thinking methodology, and her selection as a member of the Art 21 Educators Year 9 Cohort — a competitive national program bringing together teachers committed to contemporary art and pedagogy. In her classroom, students worked across painting, drawing, printmaking, ceramics, photography, sculpture, and fiber arts, and regularly engaged with the work of living artists as a catalyst for their own creative development. She holds a Master of Arts in Teaching from the University of New Orleans.
                </p>
            </section>
        </div>
    );
}
export default About;