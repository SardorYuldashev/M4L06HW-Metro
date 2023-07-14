/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async function (knex) {
  await knex('stations').del()
  await knex('stations').insert([

    // Chiloznor yo'li

    {
      // id: 1,
      name: "Buyuk ipak yo'li",
      path_id: 1,
      // backward_id: null,
      forward_id: 2,
      // has_path_link: false
    },
    {
      // id: 2,
      name: "Pushkin",
      path_id: 1,
      backward_id: 1,
      forward_id: 3,
      // has_path_link: false
    },
    {
      // id: 3,
      name: "Hamid Olimjon",
      path_id: 1,
      backward_id: 2,
      forward_id: 4,
      // has_path_link: false
    },
    {
      // id: 4,
      name: "Amir Temur xiyoboni",
      path_id: 1,
      backward_id: 3,
      forward_id: 5,
      has_path_link: true
    },
    {
      // id: 5,
      name: "Mustaqillik maydoni",
      path_id: 1,
      backward_id: 4,
      forward_id: 6,
      // has_path_link: false
    },
    {
      // id: 6,
      name: "Paxtakor",
      path_id: 1,
      backward_id: 5,
      forward_id: 7,
      has_path_link: true
    },
    {
      // id: 7,
      name: "Xalqlar do'stligi",
      path_id: 1,
      backward_id: 6,
      forward_id: 8,
      // has_path_link: false
    },
    {
      // id: 8,
      name: "Milliy bog'",
      path_id: 1,
      backward_id: 7,
      forward_id: 9,
      // has_path_link: false
    },
    {
      // id: 9,
      name: "Novza",
      path_id: 1,
      backward_id: 8,
      forward_id: 10,
      // has_path_link: false
    },
    {
      // id: 10,
      name: "Mirzo Ulug'bek",
      path_id: 1,
      backward_id: 9,
      forward_id: 11,
      // has_path_link: false
    },
    {
      // id: 11,
      name: "Chilonzor",
      path_id: 1,
      backward_id: 10,
      forward_id: 12,
      // has_path_link: false
    },
    {
      // id: 12,
      name: "Olmazor",
      path_id: 1,
      backward_id: 11,
      // forward_id: null,
      // has_path_link: false
    },

    // Yunusobod yo'li

    {
      // id: 13,
      name: "Turkiston",
      path_id: 3,
      // backward_id: null,
      forward_id: 14,
      // has_path_link: false
    },
    {
      // id: 14,
      name: "Yunusobod",
      path_id: 3,
      backward_id: 13,
      forward_id: 15,
      // has_path_link: false
    },
    {
      // id: 15,
      name: "Shaxriston",
      path_id: 3,
      backward_id: 14,
      forward_id: 16,
      // has_path_link: false
    },
    {
      // id: 16,
      name: "Bodomzor",
      path_id: 3,
      backward_id: 15,
      forward_id: 17,
      // has_path_link: false
    },
    {
      // id: 17,
      name: "Minor",
      path_id: 3,
      backward_id: 16,
      forward_id: 18,
      // has_path_link: false
    },
    {
      // id: 18,
      name: "Abdulla Qodiriy",
      path_id: 3,
      backward_id: 17,
      forward_id: 19,
      // has_path_link: false
    },
    {
      // id: 19,
      name: "Yunus Rajabiy",
      path_id: 3,
      backward_id: 18,
      forward_id: 20,
      has_path_link: true
    },
    {
      // id: 20,
      name: "Ming o'rik",
      path_id: 3,
      backward_id: 19,
      // forward_id: null,
      has_path_link: true
    },

    // O'zbekiston yo'li

    {
      // id: 21,
      name: "Beruniy",
      path_id: 2,
      // backward_id: ,
      forward_id: 22,
      // has_path_link: false
    },
    {
      // id: 22,
      name: "Tinchlik",
      path_id: 2,
      backward_id: 21,
      forward_id: 23,
      // has_path_link: false
    },
    {
      // id: 23,
      name: "Chorsu",
      path_id: 2,
      backward_id: 22,
      forward_id: 24,
      // has_path_link: false
    },
    {
      // id: 24,
      name: "G'afur G'ulom",
      path_id: 2,
      backward_id: 23,
      forward_id: 25,
      // has_path_link: false
    },
    {
      // id: 25,
      name: "Alisher Navoiy",
      path_id: 2,
      backward_id: 24,
      forward_id: 26,
      has_path_link: true
    },
    {
      // id: 26,
      name: "O'zbekiston",
      path_id: 2,
      backward_id: 25,
      forward_id: 27,
      // has_path_link: false
    },
    {
      // id: 27,
      name: "Kosmonavtlar",
      path_id: 2,
      backward_id: 26,
      forward_id: 28,
      // has_path_link: false
    },
    {
      // id: 28,
      name: "Oybek",
      path_id: 2,
      backward_id: 27,
      forward_id: 29,
      has_path_link: true
    },
    {
      // id: 29,
      name: "Toshkent",
      path_id: 2,
      backward_id: 28,
      forward_id: 30,
      // has_path_link: false
    },
    {
      // id: 30,
      name: "Mashinasozlar",
      path_id: 2,
      backward_id: 29,
      forward_id: 31,
      // has_path_link: false
    },
    {
      // id: 31,
      name: "Do'stlik",
      path_id: 2,
      backward_id: 30,
      // forward_id: null,
      has_path_link: true
    },

    // Yerusti yo'li

    {
      // id: 32,
      name: "Do'stlik 2",
      path_id: 5,
      // backward_id: null,
      forward_id: 33,
      has_path_link: true
    },
    {
      // id: 33,
      name: "2-bekat",
      path_id: 5,
      backward_id: 32,
      forward_id: 34,
      // has_path_link: false
    },
    {
      // id: 34,
      name: "3-bekat",
      path_id: 5,
      backward_id: 33,
      forward_id: 35,
      // has_path_link: false
    },
    {
      // id: 35,
      name: "4-bekat",
      path_id: 5,
      backward_id: 34,
      forward_id: 36,
      // has_path_link: false
    },
    {
      // id: 36,
      name: "5-bekat",
      path_id: 5,
      backward_id: 35,
      forward_id: 37,
      // has_path_link: false
    },
    {
      // id: 37,
      name: "6-bekat",
      path_id: 5,
      backward_id: 38,
      forward_id: 39,
      // has_path_link: false
    },
    {
      // id: 38,
      name: "7-bekat",
      path_id: 5,
      backward_id: 37,
      // forward_id: null,
      // has_path_link: false
    },

    // Sergeli yo'li

    {
      // id: 39,
      name: "1-bekat",
      path_id: 4,
      // backward_id: null,
      forward_id: 40,
      // has_path_link: false
    },
    {
      // id: 40,
      name: "2-bekat",
      path_id: 4,
      backward_id: 39,
      forward_id: 41,
      // has_path_link: false
    },
    {
      // id: 41,
      name: "3-bekat",
      path_id: 4,
      backward_id: 40,
      forward_id: 42,
      // has_path_link: false
    },
    {
      // id: 42,
      name: "4-bekat",
      path_id: 4,
      backward_id: 41,
      forward_id: 43,
      // has_path_link: false
    },
    {
      // id: 43,
      name: "5-bekat",
      path_id: 4,
      backward_id: 42,
      // forward_id: null,
      // has_path_link: false
    },
  ]);
};