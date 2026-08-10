import { toast } from "react-toastify";
import { HiMiniCheckBadge, HiMiniXCircle } from "react-icons/hi2";

const base = {
  autoClose: 3500,
  closeButton: false,
  hideProgressBar: false,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 30,

  className:
    "!mt-3 mobile-small:!mt-5 mobile:!mt-5 tablet-portrait:!mt-0 !w-[calc(100vw-32px)] mobile-small:!mx-auto mobile:!mx-auto tablet-portrait:!mx-0 mobile:!w-[calc(100vw-32px)] tablet-portrait:!w-[360px] !max-w-[360px] !rounded-[18px] !overflow-hidden !p-0 !shadow-[0_20px_60px_rgba(0,0,0,.25)] backdrop-blur-xl",

  bodyClassName: "!m-0 !p-0",
};

const ToastContent = ({ title, text, icon, badgeBg, badgeBorder, iconColor }) => (
  <div className="flex items-center gap-3 tablet-portrait:gap-4 px-3 py-3 mobile:px-4 tablet-portrait:px-5 tablet-portrait:py-4">
    <div
      className="flex h-9 w-9 mobile:h-10 mobile:w-10 tablet-portrait:h-11 tablet-portrait:w-11 shrink-0 items-center justify-center rounded-full border"
      style={{
        background: badgeBg,
        borderColor: badgeBorder,
      }}
    >
      {icon(iconColor)}
    </div>

    <div className="min-w-0 flex-1">
      <span className="block truncate text-[13px] mobile:text-sm tablet-portrait:text-[15px] font-semibold tracking-wide text-theme-strong">
        {title}
      </span>

      <span className="mt-0.5 block break-words text-[12px] mobile:text-[13px] tablet-portrait:leading-6 leading-5 font-medium text-theme-soft">
        {text}
      </span>
    </div>
  </div>
);

export const notify = {
  success: (text) =>
    toast(
      <ToastContent
        title="عملیات موفق"
        text={text}
        badgeBg="rgba(74,222,128,.10)"
        badgeBorder="rgba(74,222,128,.18)"
        iconColor="var(--theme-success-light)"
        icon={(color) => <HiMiniCheckBadge size={21} style={{ color }} />}
      />,
      {
        ...base,
        className: `${base.className} !bg-dark-success-bg !border !border-dark-success-light/15`,
        progressClassName:
          "!h-[3px] !bg-gradient-to-r !from-dark-success-hover !via-dark-success !to-dark-success-light",
      },
    ),

  error: (text) =>
    toast(
      <ToastContent
        title="عملیات ناموفق"
        text={text}
        badgeBg="rgba(225,107,107,.10)"
        badgeBorder="rgba(225,107,107,.18)"
        iconColor="var(--theme-danger)"
        icon={(color) => <HiMiniXCircle size={21} style={{ color }} />}
      />,
      {
        ...base,
        className: `${base.className} !bg-dark-danger-bg !border !border-dark-danger/15`,
        progressClassName:
          "!h-[3px] !bg-gradient-to-r !from-dark-danger-dark !via-dark-danger-hover !to-dark-danger-light",
      },
    ),
};
