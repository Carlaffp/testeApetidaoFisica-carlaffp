// Variáveis para aplicar os resultados do teste. Não as altere.

let gender = process.argv[2]; // Sexo 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

// Importante:
// Se o sexo (gender) for masculino, utilize a palavra "male"
// Se o sexo (gender) for feminino, utilize a palavra "female"

// Sugestão para começar:
// if (gender === "male")  
// **sua lógica a partir daqui**

if(gender==="male"){  //selecionando se sexo masculino 
  if(height>=1.70){ //testando altura do sexo masculino
    if(barReps>=6||barSeconds<=15){  //testando se Pelo menos 6 repetições de barra ou no máximo 15 segundos de duração;
      if(abs>=41){                 //testando se ⁠⁠Pelo menos 41 abdominais
        if(runDistance>=3000&&runTime<=720||runDistance>=5000&&runTime<=1200){   //testando se Pelo menos 3km em no máximo 12 min de corrida ou pelo menos 5km em no máximo 20 min de corrida;
          if(swimDistance>=100&&swimTime<=60 ||diveTime<=30){  //testando se Pelo menos 100m em no máximo de 1 min de natação ou no máximo 30s de mergulho.
            passed = true     //se passou dentro de todos requisitos: true
          }
        }
      }
      
    }
  }
}
if (gender==="female"){  //selecionando sexo feminino
  if(height>=1.60){  //testando altura
    if(barReps>=5||barSeconds<=12){  //testando se Pelo menos 5 repetições de barra ou no máximo 12 segundos de duração
      if(abs>=41){  //testando se Pelo menos 41 abdominais;
        if(runDistance>=4000&&runTime<=900||runDistance>=6000&&runTime<=1320){  //testando se Pelo menos 4km em no máximo 15 min de corrida ou pelo menos 6km em no máximo 22 min de corrida;
          if(swimDistance>=100&&swimTime<=60 ||diveTime<=30){  //testando se Pelo menos 100m em no máximo 1 min de natação ou no máximo 30s de mergulho
            passed = true   // se passou dentro de todos requisitos: true

          }
        }
      }
    
    }
  }
}

// Deve conter apenas esse console.log no seu código.
// Senão os testes não irão funcionar.
console.log(passed);


