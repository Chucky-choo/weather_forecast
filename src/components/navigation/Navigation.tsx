import {memo, useState} from "react";
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {appStoreType} from "../../redux/redux-store";


const Navigation = memo(() => {
  const navigate = useNavigate()
  const location = useLocation()


  const params = useSelector((store: appStoreType) => store.data.params)

  const regexp = /\/in\//ig;
  const [value, setValue] = useState(regexp.test(location.pathname) ? 1 : 0);

  function changeURL(value: number) {
    if (value === 0) {
      navigate(`/${params.q}`)
    } else {
      navigate(`/in/${params.q}`)
    }
    setValue(value)
  }


  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        changeURL(newValue)
      }}
    >
      <BottomNavigationAction
        label="Main"
        icon={<ChevronLeftIcon/>}
      />
      <BottomNavigationAction
        label="more info"
        icon={<ChevronRightIcon/>}
      />
    </BottomNavigation>
  );
}
)
export default Navigation;
