const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./potencia_tech_and_rocketseat.db')

db.serialize(function () {

    //Criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
    `)

     //Inserir dados na tabela
    const query = `
      INSERT INTO ideas(
            image,
           title,
           category,
            description,
           link
     ) VALUES (?, ?, ?, ?, ?); 
     `

      const values = [
        "../public/img/worker.png",
        "Cursos de Programação",
         "Estudo",
         "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi sit quia voluptatem",
         "https://rocketseat.com.br"
     ]


      db.run(query, values, function (err) {
          if (err) return console.log(err)

          console.log(this)
      })


    //Deletar um dado da tabelan
    db.run(`DELETE FROM ideas WHERE id = ?`, [3], function(err) {
       if(err) return console.log(err)

        console.log("DELETEI", this)
     })



    //Consultar dados na tabela
       db.all(`SELECT * FROM ideas`, function(err, rows) {
           if(err) return console.log(err)

           console.log(rows)
       })

    })


    module.exports = db