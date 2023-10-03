import React, { useMemo } from "react";
import Icon from "@/components/ui/Icon";
import { useAuthStore } from "../../../../helpers";

const GroupChart4 = ({ solicitudes }) => {
  const { user: { sucursal } } = useAuthStore();

  const countSolicitudesPorEstado = (data) => {
    const totals = {
      1: 0, // Nueva
      2: 0, // En proceso
      3: 0, // A entregar
      4: 0, // Finalizada
      5: 0, // Rechazada
    };

    data.forEach((item) => {
      const estadoId = item.estado.id;
      if (totals.hasOwnProperty(estadoId)) {
        totals[estadoId]++;
      }
    });

    return totals;
  };

  const totalsByEstado = useMemo(() => countSolicitudesPorEstado(solicitudes), [
    solicitudes,
  ]);

  function exportarNombresEstados() {
    return {
      1: "nuevas",
      2: "en proceso",
      3: "para entregar",
      4: "finalizadas",
      5: "rechazadas",
    };
  }

  const nombresEstados = exportarNombresEstados();

  const statistics = [];

  if (sucursal === 1) {
    statistics.push({
      title: `Solicitudes ${nombresEstados[1]}`,
      count: totalsByEstado[1] || 0,
      bg: "bg-info-500",
      text: "text-info-500",
      icon: "heroicons-solid:plus",
    });
  }
  
  statistics.push(
    {
      title: `Solicitudes ${nombresEstados[2]}`,
      count: totalsByEstado[2] || 0,
      bg: "bg-warning-500",
      text: "text-warning-500",
      icon: "heroicons-outline:clock",
    },
    {
      title: `Solicitudes ${nombresEstados[3]}`,
      count: totalsByEstado[3] || 0,
      bg: "bg-primary-500",
      text: "text-primary-500",
      icon: "heroicons-outline:paper-airplane",
    },
    {
      title: `Solicitudes ${nombresEstados[4]}`,
      count: totalsByEstado[4] || 0,
      bg: "bg-success-500",
      text: "text-success-500",
      icon: "heroicons-solid:check",
    },
    {
      title: `Solicitudes ${nombresEstados[5]}`,
      count: totalsByEstado[5] || 0,
      bg: "bg-red-500",
      text: "text-red-500",
      icon: "heroicons-solid:x-mark",
    }
  );

  return (
    <>
      {statistics.map((item, i) => (
        <div
          key={i}
          className={`${item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center`}
        >
          <div
            className={`${item.text} mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4 `}
          >
            <Icon icon={item.icon} />
          </div>
          <span className="block text-sm text-slate-600 font-medium dark:text-white mb-1">
            {item.title}
          </span>
          <span className="block mb- text-2xl text-slate-900 dark:text-white font-medium">
            {item.count}
          </span>
        </div>
      ))}
    </>
  );
};

export default GroupChart4;