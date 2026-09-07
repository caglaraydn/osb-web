import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import KatilimFormu from "../pages/katilim-formu/page";
import Sponsorluk from "../pages/sponsorluk/page";
import Etkinlikler from "../pages/etkinlikler/page";
import EtkinlikDetay from "../pages/etkinlik-detay/page";
import Videolar from "../pages/videolar/page";
import Hakkimizda from "../pages/hakkimizda/page";
import NedenKatilmali from "../pages/neden-katilmali/page";
import SanayicilerIcin from "../pages/sanayiciler-icin/page";
import Iletisim from "../pages/iletisim/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/hakkimizda",
    element: <Hakkimizda />,
  },
  {
    path: "/sanayiciler-icin",
    element: <SanayicilerIcin />,
  },
  {
    path: "/neden-katilmali",
    element: <NedenKatilmali />,
  },
  {
    path: "/katilim-formu",
    element: <KatilimFormu />,
  },
  {
    path: "/sponsorluk",
    element: <Sponsorluk />,
  },
  {
    path: "/etkinlikler",
    element: <Etkinlikler />,
  },
  {
    path: "/etkinlik/:slug",
    element: <EtkinlikDetay />,
  },
  {
    path: "/videolar",
    element: <Videolar />,
  },
  {
    path: "/iletisim",
    element: <Iletisim />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;