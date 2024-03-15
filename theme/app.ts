import { appConfig } from "@/config/app";
import { createTheme } from "@mantine/core";

export const theme = createTheme({
    colors: {
      primary: [
        appConfig.colors.primary[50],
        appConfig.colors.primary[100],
        appConfig.colors.primary[200],
        appConfig.colors.primary[300],
        appConfig.colors.primary[500],
        appConfig.colors.primary[600],
        appConfig.colors.primary[700],
        appConfig.colors.primary[800],
        appConfig.colors.primary[900],
        appConfig.colors.primary[950],
      ],
    },
    components:{
        Button:{
            defaultProps:{
                size:'lg',
                color:'teal'
            }
        }
    },
    fontFamily: 'GeneralSans',
    primaryColor: 'primary',
    primaryShade: 4,
    breakpoints:{
      xs:'30em',
      sm:'48em',
      lg:'64em',
      xl:'90em'
    }
  
  });