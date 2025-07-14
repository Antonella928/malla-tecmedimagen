
const ramos = [
  // Año 1
  {
    anio: "Año 1",
    periodos: [
      [
        { codigo: "TECM-2401", nombre: "Biomatemáticas I", creditos: 4 },
        { codigo: "FCSA-2402", nombre: "Biología e Histología", creditos: 7 },
        { codigo: "FCSA-2403", nombre: "Química General y Orgánica", creditos: 6 },
        { codigo: "FCSA-2401", nombre: "Anatomía General", creditos: 6 },
        { codigo: "TECM-2402", nombre: "Introducción a la Tecnología Médica", creditos: 3 },
        { codigo: "FGRA-2401", nombre: "Tecnología e Innovación", creditos: 4 }
      ],
      [
        { codigo: "TECM-2403", nombre: "Biomatemáticas II", creditos: 8, requisitos: ["TECM-2401"] },
        { codigo: "FCSA-2205", nombre: "Psicología General y del Desarrollo", creditos: 4 },
        { codigo: "FCSA-2404", nombre: "Bioquímica", creditos: 5, requisitos: ["FCSA-2403"] },
        { codigo: "FCSA-2202", nombre: "Bioestadística", creditos: 5 },
        { codigo: "TECM-2404", nombre: "Anatomía Topográfica y Neuroanatomía", creditos: 9, requisitos: ["FCSA-2401"] }
      ]
    ]
  },

  // ... Continúa con los años 2 a 5 como hiciste antes
  // Si quieres, te puedo agregar el resto ahora mismo.

];

const aprobados = JSON.parse(localStorage.getItem("ramosAprobados") || "[]");

function crearMalla() {
  const container = document.getElementById("mallaContainer");
  container.innerHTML = "";

  ramos.forEach(anio => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio";

    anio.periodos.forEach((periodo, i) => {
      const divPeriodo = document.createElement("div");
      divPeriodo.className = "periodo";

      periodo.forEach(ramo => {
        const btn = document.createElement("div");
        btn.className = "ramo";
        btn.dataset.codigo = ramo.codigo;
        btn.dataset.requisitos = JSON.stringify(ramo.requisitos || []);

        const estaAprobado = aprobados.includes(ramo.codigo);
        const requisitosCumplidos = (ramo.requisitos || []).every(req => aprobados.includes(req));

        if (estaAprobado) {
          btn.classList.add("aprobado");
        } else if (!ramo.requisitos || requisitosCumplidos) {
          btn.classList.add("desbloqueado");
        } else {
          btn.classList.add("bloqueado");
        }

        btn.innerHTML = `<strong>${ramo.codigo}</strong><br>${ramo.nombre}<br><small>${ramo.creditos} créditos</small>`;
        btn.onclick = () => toggleAprobado(btn);

        divPeriodo.appendChild(btn);
      });

      divAnio.appendChild(divPeriodo);
    });

    container.appendChild(divAnio);
  });
}

function toggleAprobado(btn) {
  if (btn.classList.contains("bloqueado")) return;

  const codigo = btn.dataset.codigo;
  const index = aprobados.indexOf(codigo);

  if (index >= 0) {
    aprobados.splice(index, 1);
  } else {
    aprobados.push(codigo);
  }

  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
  crearMalla();
}

function resetMalla() {
  localStorage.removeItem("ramosAprobados");
  crearMalla();
}

crearMalla();
