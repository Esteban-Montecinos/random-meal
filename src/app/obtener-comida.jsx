"use client";

import Image from "next/image";
import { useState } from "react";

export default function ObtenerComida() {
  const [comida, setComida] = useState([]);
  async function handleClick() {
    await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((dato) => {
        const { meals } = dato;
        setComida(meals);
      });
  }
  return (
    <>
      <button
        onClick={handleClick}
        type="button"
        className="bg-orange-500 p-4 rounded-lg text-white text-sm hover:bg-orange-600 transition-colors"
      >
        CONSEGUIR COMIDA 🍔
      </button>
      <article className="flex flex-col items-center justify-center">
        {comida.length ? (
          <>
            <h2 className="text-3xl font-bold max-w-2xl text-orange-500 text-center">{comida[0].strMeal}</h2>
            <section className="flex flex-col">
              <div
                className="bg-cover bg-center aspect-[12/5] rounded-t-3xl border-t-2 border-x-2 border-slate-500"
                style={{ backgroundImage: `url(${comida[0].strMealThumb})` }}
              ></div>
              <div className="flex flex-col items-center border-x-2 border-slate-500">
                <div className="flex flex-col w-full items-start justify-around p-4">
                  {comida[0].strTags ? (
                    <p className="flex-1"><span className="font-bold">Etiquetas:</span> {comida[0].strTags}</p>
                  ) : null}
                  <span className="flex-1">
                  <span className="font-bold">Categoria:</span> {comida[0].strCategory}
                  </span>
                  <span className="flex-1"><span className="font-bold">Area:</span> {comida[0].strArea}</span>
                </div>
                <div className="flex flex-col w-full items-center bg-slate-400 p-4">
                  <h2 className="text-2xl underline font-semibold ">Ingredientes</h2>
                  <div className="flex flex-row w-full justify-around">
                    <ul className="list-disc flex flex-col">
                      {comida[0].strIngredient1 ? (
                        <li>
                          {comida[0].strIngredient1 +
                            " - " +
                            comida[0].strMeasure1}
                        </li>
                      ) : null}
                      {comida[0].strIngredient2 ? (
                        <li>
                          {comida[0].strIngredient2 +
                            " - " +
                            comida[0].strMeasure2}
                        </li>
                      ) : null}
                      {comida[0].strIngredient3 ? (
                        <li>
                          {comida[0].strIngredient3 +
                            " - " +
                            comida[0].strMeasure3}
                        </li>
                      ) : null}
                      {comida[0].strIngredient4 ? (
                        <li>
                          {comida[0].strIngredient4 +
                            " - " +
                            comida[0].strMeasure4}
                        </li>
                      ) : null}
                      {comida[0].strIngredient5 ? (
                        <li>
                          {comida[0].strIngredient5 +
                            " - " +
                            comida[0].strMeasure5}
                        </li>
                      ) : null}
                      {comida[0].strIngredient6 ? (
                        <li>
                          {comida[0].strIngredient6 +
                            " - " +
                            comida[0].strMeasure6}
                        </li>
                      ) : null}
                      {comida[0].strIngredient7 ? (
                        <li>
                          {comida[0].strIngredient7 +
                            " - " +
                            comida[0].strMeasure7}
                        </li>
                      ) : null}
                      {comida[0].strIngredient8 ? (
                        <li>
                          {comida[0].strIngredient8 +
                            " - " +
                            comida[0].strMeasure8}
                        </li>
                      ) : null}
                      {comida[0].strIngredient9 ? (
                        <li>
                          {comida[0].strIngredient9 +
                            " - " +
                            comida[0].strMeasure9}
                        </li>
                      ) : null}
                      {comida[0].strIngredient10 ? (
                        <li>
                          {comida[0].strIngredient10 +
                            " - " +
                            comida[0].strMeasure10}
                        </li>
                      ) : null}
                    </ul>
                    <ul className="list-disc flex flex-col">
                      {comida[0].strIngredient11 ? (
                        <li>
                          {comida[0].strIngredient11 +
                            " - " +
                            comida[0].strMeasure11}
                        </li>
                      ) : null}
                      {comida[0].strIngredient12 ? (
                        <li>
                          {comida[0].strIngredient12 +
                            " - " +
                            comida[0].strMeasure12}
                        </li>
                      ) : null}
                      {comida[0].strIngredient13 ? (
                        <li>
                          {comida[0].strIngredient13 +
                            " - " +
                            comida[0].strMeasure13}
                        </li>
                      ) : null}
                      {comida[0].strIngredient14 ? (
                        <li>
                          {comida[0].strIngredient14 +
                            " - " +
                            comida[0].strMeasure14}
                        </li>
                      ) : null}
                      {comida[0].strIngredient15 ? (
                        <li>
                          {comida[0].strIngredient15 +
                            " - " +
                            comida[0].strMeasure15}
                        </li>
                      ) : null}
                      {comida[0].strIngredient16 ? (
                        <li>
                          {comida[0].strIngredient16 +
                            " - " +
                            comida[0].strMeasure16}
                        </li>
                      ) : null}
                      {comida[0].strIngredient17 ? (
                        <li>
                          {comida[0].strIngredient17 +
                            " - " +
                            comida[0].strMeasure17}
                        </li>
                      ) : null}
                      {comida[0].strIngredient18 ? (
                        <li>
                          {comida[0].strIngredient18 +
                            " - " +
                            comida[0].strMeasure18}
                        </li>
                      ) : null}
                      {comida[0].strIngredient19 ? (
                        <li>
                          {comida[0].strIngredient19 +
                            " - " +
                            comida[0].strMeasure19}
                        </li>
                      ) : null}
                      {comida[0].strIngredient20 ? (
                        <li>
                          {comida[0].strIngredient20 +
                            " - " +
                            comida[0].strMeasure20}
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-24 items-center border-x-2 border-b-2 rounded-b-3xl p-4 border-slate-500">
                <p className="indent-8 text-lg">{comida[0].strInstructions}</p>
              {comida.length ? (
                  <a
                    href={comida[0].strYoutube}
                    className="bg-orange-500 p-4 mt-4 text-center self-center justify-self-center uppercase rounded-lg text-white text-sm hover:bg-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver video 🎬
                  </a>
                ) : null}
              </div>
            </section>
          </>
        ) : null}
      </article>
    </>
  );
}
