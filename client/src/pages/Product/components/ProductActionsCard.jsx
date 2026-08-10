import { AuthContext } from "@/context/AuthContext";
import { FavoritesContext } from "@/context/FavoritesContext";
import { usePropertyById } from "@/hooks/usePropertyById";
import { notify } from "@/utils/toast";
import { useContext } from "react";
import { FaCalendarCheck, FaHeart } from "react-icons/fa6";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";

function ProductActionsCard() {
  const { property } = usePropertyById();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const isFavorite = favorites.includes(String(property?.id));

  const { user } = useContext(AuthContext);

  return (
    <div className="w-full tablet-landscape:w-[30%]">
      <div className="w-full rounded-xl border border-dark-panel bg-theme-surface-inset p-4 text-theme-strong space-y-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-dark-primary/40 hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)]">
        <div className="space-y-2">
          <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-dark-primary px-4 py-2 text-dark-background-secondary font-medium transition hover:opacity-90 cursor-pointer">
            درخواست بازدید
            <FaCalendarCheck />
          </button>

          <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-dark-primary px-4 py-2 text-dark-primary transition-colors hover:bg-dark-primary hover:text-dark-background-secondary cursor-pointer">
            ارسال پیام
            <FiMessageCircle />
          </button>
        </div>

        <div className="h-px bg-dark-panel" />

        <div className="flex items-center justify-between text-sm">
          <span className="text-theme-gray-soft">شناسه ملک</span>
          <span className="text-theme-strong font-medium tracking-wider">
            {property?.estateCode}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-theme-gray-soft">وضعیت</span>
          <span className="text-dark-primary font-medium">آماده تحویل</span>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <button
          onClick={() => {
            if (!user) {
              notify.error(
                "ابتدا وارد حساب کاربری خود شوید تا بتوانید این ملک را به علاقه‌ مندی‌ ها اضافه کنید.",
              );
              return;
            }

            toggleFavorite(property.id);
            if (isFavorite) {
              notify.success("ملک از علاقه‌مندی‌ها حذف شد.");
            } else {
              notify.success("ملک به علاقه‌مندی‌ها اضافه شد.");
            }
          }}
          className={`flex w-full items-center justify-center gap-2 rounded-xl border border-dark-panel bg-theme-surface-inset px-4 py-3 transition-all duration-300 hover:-translate-y-1 cursor-pointer hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)] ${
            isFavorite
              ? "border-dark-primary/40 text-dark-primary"
              : "text-theme-gray-light hover:border-dark-primary/40 hover:text-dark-primary"
          }`}
        >
          {isFavorite ? (
            <FaHeart className="text-lg" />
          ) : (
            <FiHeart className="text-lg" />
          )}

          {isFavorite ? "ذخیره شده" : "ذخیره کردن"}
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-dark-panel bg-theme-surface-inset px-4 py-3 text-theme-gray-light transition-all duration-300 ease-out hover:-translate-y-1 hover:border-dark-primary/40 hover:text-dark-primary hover:shadow-[0_8px_30px_rgba(242,202,80,0.08)] cursor-pointer">
          <FiShare2 className="text-lg" />
          اشتراک‌گذاری
        </button>
      </div>
    </div>
  );
}

export default ProductActionsCard;
