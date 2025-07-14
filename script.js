const ramos = [
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
  {
    anio: "Año 2",
    periodos: [
      [
        { codigo: "TECM-2405", nombre: "Física", creditos: 5 },
        { codigo: "FCSA-2405", nombre: "Fisiología General", creditos: 7 },
        { codigo: "TECM-2406", nombre: "Microbiología y Genética General", creditos: 6 },
        { codigo: "FCSA-2204", nombre: "Primeros Auxilios", creditos: 3 },
        { codigo: "FCSA-2213", nombre: "Salud Pública y Epidemiológica", creditos: 4 },
        { codigo: "FGRA-2402", nombre: "Inglés Básico", creditos: 6 }
      ],
      [
        { codigo: "TECM-2407", nombre: "Física Electromagnética", creditos: 7, requisitos: ["TECM-2405"] },
        { codigo: "TECM-2408", nombre: "Fisiopatología y Farmacología Aplicada a la Tecnología Médica", creditos: 8, requisitos: ["FCSA-2405"] },
        { codigo: "TECM-2409", nombre: "Bioética y Bioseguridad", creditos: 6 },
        { codigo: "TECM-2410", nombre: "Módulo Integrador Ciclo Inicial", creditos: 9 }
      ]
    ]
  },
  {
    anio: "Año 3",
    periodos: [
      [
        { codigo: "TECM-2411", nombre: "Anatomía Radiológica", creditos: 6 },
        { codigo: "TECM-2121", nombre: "Imagenología Diagnóstica 1", creditos: 6 },
        { codigo: "TECM-2122", nombre: "Radioprotección y Dosimetría", creditos: 1 },
        { codigo: "TECM-2412", nombre: "Administración y Gestión en Salud", creditos: 5 },
        { codigo: "FCSA-2406", nombre: "Metodología de la Investigación 1", creditos: 4 },
        { codigo: "FGRA-2404", nombre: "Desarrollo Sostenible", creditos: 4 }
      ],
      [
        { codigo: "TECM-2413", nombre: "Tomografía Computada", creditos: 6 },
        { codigo: "TECM-2414", nombre: "Imagenología Diagnóstica 2", creditos: 5 },
        { codigo: "TECM-2127", nombre: "Física Nuclear", creditos: 4 },
        { codigo: "TECM-2415", nombre: "Patología Imagenológica", creditos: 5 },
        { codigo: "FCSA-2407", nombre: "Morfología de la Investigación 2", creditos: 4 },
        { codigo: "FGRA-2403", nombre: "Inglés Técnico", creditos: 6 }
      ]
    ]
  },
  {
    anio: "Año 4",
    periodos: [
      [
        { codigo: "TECM-2416", nombre: "Resonancia Magnética", creditos: 6 },
        { codigo: "TECM-2417", nombre: "Medicina Nuclear", creditos: 6 },
        { codigo: "TECM-2418", nombre: "Mantención de Equipos Radiológicos", creditos: 5 },
        { codigo: "TECM-2419", nombre: "Electivo de Especialidad", creditos: 5 },
        { codigo: "FCSA-2408", nombre: "Seminario de Tesis I", creditos: 4 },
        { codigo: "FGRA-2405", nombre: "Responsabilidad Social y Emprendimiento", creditos: 4 }
      ],
      [
        { codigo: "TECM-2420", nombre: "Ultrasonido", creditos: 6 },
        { codigo: "TECM-2137", nombre: "Digitalización y Procesamiento de Imágenes Médicas", creditos: 4 },
        { codigo: "TECM-2136", nombre: "Oncología y Radioterapia", creditos: 6 },
        { codigo: "TECM-2138", nombre: "Módulo Integrador Ciclo Intermedio", creditos: 4 },
        { codigo: "FCSA-2409", nombre: "Seminario de Tesis II", creditos: 4 },
        { codigo: "FGRA-2406", nombre: "Preparación para la Vida Laboral", creditos: 6 }
      ]
    ]
  },
  {
    anio: "Año 5",
    periodos: [
      [
        { codigo: "TECM-2421", nombre: "Técnicas Imagenológicas Especializadas", creditos: 10 },
        { codigo: "TECM-2141", nombre: "Seminario de Imagenología y Física Médica", creditos: 10 },
        { codigo: "TECM-2142", nombre: "Discusión Casos Clínicos", creditos: 10 }
      ],
      [
        { codigo: "TECMD-2143", nombre: "Práctica Profesional", creditos: 1 }
      ]
    ]
  }
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
