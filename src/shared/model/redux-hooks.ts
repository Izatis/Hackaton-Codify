import { AppDispatch } from "app/store/store";
import { useDispatch } from "react-redux";
import { RootState } from "app/store/store";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();