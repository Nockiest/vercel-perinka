"use client";
import ArticleSummary from "../../components/ArticleSummary";
import Hero from "../../components/global/Hero";
import React, { useEffect, useState } from "react";
import Section from "../../components/global/Section";
import InfoPost from "./InfoPost";
import ArticleEditor from "./ArticleEditor";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase";

const NewNumber = () => {
  const [articles, setArticles] = useState([]);
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleAddArticle = (newArticleId) => {
    // Handle any logic after adding a new article
    console.log("New article added with ID:", newArticleId);
  };

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articlesCollection = collection(db, "articleSummaries");
        const articlesSnapshot = await getDocs(articlesCollection);

        const articlesData = articlesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setArticles(articlesData);
        console.log("set articles", articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handlePasswordSubmit = async () => {
    try {
      const response = await fetch("/api/checkPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Password is correct
        setIsPasswordCorrect(true);
      } else {
        const data = await response.json();
        console.error(data.message); // Incorrect password
        setIsPasswordCorrect(false);
      }
    } catch (error) {
      console.error("Error checking password:", error);
    }
  };

  return (
    <div>
      <Hero
        firstHeading={"AKTUÁLNÍ <br />ČÍSLO"}
        secondHeading={"AKTUÁLNÍ ČÍSLO"}
      />
      {articles.map((article, index) => (
        <Section
          key={article.id}
          classNames={index % 2 === 1 ? "bg-stone-300" : ""}
        >
          <InfoPost
            title={article.title}
            textContent={article.textContent}
            image={article.image}
            imageUrlOrId={article.id} // Pass article ID to InfoPost
            releaseDate="2/2023"
          />
        </Section>
      ))}
    </div>
  );
};
export default NewNumber;
// {/* <div>
//   <label htmlFor="password">Enter Password:</label>
//   <input
//     type="password"
//     id="password"
//     value={password}
//     onChange={handlePasswordChange}
//   />
//   <button onClick={handlePasswordSubmit}>Submit Password</button>
// </div> */}

// {/* Render ArticleEditor only when the password is correct */}
// {/* {isPasswordCorrect && ( */}
//   {/* <ArticleEditor onAddArticle={handleAddArticle} /> */}
// {/* )} */}
// const NewNumber = () => {

//   return (
//     <div>
//       <Hero firstHeading={"AKTUÁLNÍ <br />ČÍSLO"} secondHeading={"AKTUÁLNÍ ČÍSLO"}   />
//       <Section classNames={"brown"}>
//         <InfoPost  textContent="První letošní číslo je tady! A podíleli se na něm i noví členové
//           redakce ze tříd 1.J a 2.E. Papírové časopisy opět najdete v celé
//           škole, nově jsme ale do studovny, knihovny a před řiditelnu přidali
//           barevné archivy, ve kterých budou umístěna i starší čísla. Přeji vám
//           krásné počtení a níže samozřejmě najdete stručný přehled toho, co jsme
//           si pro vás připravili ve čtvrtém čísle Peřinky."
//          />
//       </Section>
//       <Section classNames={"bg-stone-300"}>
//       <InfoPost
//           title={'NOVÝ FEED A POČTENÍČKO'}
//           textContent="Rubriku aktuality jsme tentokrát věnovali oznámení nového instagramového feedu, který vytvořila Tereza Kryšpínová a také připomenutí toho, že zde na webu máme i bonusové počteníčko, které si určitě můžete přečíst."

//           image={{
//             src: '/randomPics/pic1.jpg',
//             position: 'left' ,
//             alt: 'randompic',
//             size: {x:600, y:300}
//           }}
//          />
//       </Section>
//       <Section  >
//       <InfoPost
//           title={'ZÁŘÍ A ŘÍJEN 28.'}
//           textContent="
//           Stejně jako jsme v posledním čísle loňského školního roku věnovali stranu květnovým pondělkům, teď jsme si připravili něco málo o osmadvacátém září a říjnu. Co stojí za Dnem české státnosti a Dnem vzniku samostatného československého státu?"

//           // image={{
//           //   src: '/randomPics/pic1.jpg',
//           //   position: 'left' ,
//           //   alt: 'randompic',
//           //   size: {x:600, y:300}
//           // }}
//          />
//       </Section>
//       <Section classNames={"bg-stone-300"}>
//       <InfoPost
//           title={'HAVĚŤ #2'}
//           textContent="Tento článek je také inspirovaný minulým číslem. Jelikož Havěť, kterou v minulém čísle představili Eliška s Jonášem, slavila velký úspěch, zopakovali si to tito redaktoři a tentokrát vás seznámí například s Prašníkem spavým nebo Smíškem sladkým."

//           image={{
//             src: '/randomPics/pic1.jpg',
//             position: 'right' ,
//             alt: 'randompic',
//             size: {x:200, y:300}
//           }}
//          />
//       </Section>
//       <Section  >
//       <InfoPost
//           title={'MIKROMETEORITY'}
//           textContent="Pojďte se s námi vydat do přírody. Dnes dokonce až do vesmíru, takže si nastartujte rakety a oblečte skafandry!"

//           image={{
//             src: '/randomPics/pic1.jpg',
//             position: 'right' ,
//             alt: 'randompic',
//             size: {x:400, y:600}
//           }}
//          />
//       </Section>

//     </div>
//   )
// }
