import { useEffect } from "react";
import Card from "@/components/ui/Card";
import GroupChart4 from "@/components/partials/widget/chart/group-chart-4";
import { useSolicitudStore, useMaterialStore } from "@/helpers";
import HomeBredCurbs from "@/components/ui/HomeBredCurbs";
import { useAuthStore } from "../../helpers";

const Dashboard = () => {
  const { solicitudes, startLoadingSolicitudes } = useSolicitudStore();
  const { selectDateReport, startDownloadReport } = useMaterialStore();
  const { user: { sucursal } } = useAuthStore();

  const gridColumns = sucursal !== 1 ? "md:grid-cols-4" : "md:grid-cols-5";

  const onDownloadReport = () => {
    startDownloadReport();
  };

  useEffect(() => {
    startLoadingSolicitudes();
  }, []);

  return (
    <div>
      <Card title="Punto Giro">
        <div className="flex justify-between">
          <p className="text-lg mx-0 my-auto hidden md:flex">Dashboard</p>
          {sucursal === 1 && (
            <div>
              <button className="inline-block ml-4 bg-slate-300 dark:bg-slate-900 items-center text-center rounded-lg">
                <HomeBredCurbs fnReport={selectDateReport} />
              </button>
              <button onClick={onDownloadReport} className="inline-block ml-4 bg-slate-300 dark:bg-slate-900 items-center text-center px-6 py-2 rounded-lg">
                Exportar
              </button>
            </div>
          )}
        </div>
      </Card>

      <div className={`mt-4 grid ${gridColumns} sm:grid-cols-2 grid-cols-1 gap-4`}>
        <GroupChart4 solicitudes={solicitudes} />
      </div>
    </div>
  );
};

export default Dashboard;
