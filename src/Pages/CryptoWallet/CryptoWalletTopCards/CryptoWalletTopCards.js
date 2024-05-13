import React, { Suspense } from "react";

// Theme
import { useTheme } from "@mui/material/styles";

// Styles
import styles from "./CryptoWalletTopCards.module.css";

// Material
import {
  Button,
  Skeleton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import { LightUIButtonPrimary } from "../../../Utilities/LightUIButtons";

// Card Images
import TotalFundValueImage from "../../../assets/totalFundValueImage.svg";
import BuyCryptoCardImage from "../../../assets/buyCryptoCurrencyCardImg.svg";
import TotalFundValueImageLight from "../../../assets/totalFundValueImageLight.svg";
import BuyCryptoCardImageLight from "../../../assets/buyCryptoCurrencyCardImgLight.svg";

// Router
import { useNavigate } from "react-router-dom";

// Lazy Image component
const LazyImageComponent = React.lazy(() =>
  import("../../../components/LazyImageComponent/LazyImageComponent")
);

const CryptoWalletTopCards = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={styles.mainBox}>
      <Box className={styles.cardBox} bgcolor={theme.palette.background.card}>
        <Stack
          direction={!isTablet ? "row" : "column"}
          spacing={4}
          alignItems="stretch"
        >
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              bgcolor={theme.palette.background.paper}
              className={styles.card}
            >
              <Box>
                <Typography
                  className={styles.cardSubTitle}
                  sx={{ fontSize: { xs: "10px", sm: "10px", md: "14px" } }}
                  color="secondary"
                  variant="body2"
                >
                  Total fund value
                </Typography>
                <Typography
                  mt={3}
                  mb={2}
                  variant="h4"
                  className={styles.cardTitle}
                  sx={{ fontSize: { xs: "10px", sm: "24px", md: "24px" } }}
                >
                  $73,275
                </Typography>
              </Box>
              <Box className={styles.cardImageArea}>
                <Suspense
                  fallback={
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={210}
                      height={175}
                    />
                  }
                >
                  {theme.palette.mode === "dark" ? (
                    <LazyImageComponent
                      className={styles.cardImage}
                      src={TotalFundValueImage}
                    />
                  ) : (
                    <LazyImageComponent
                      className={styles.cardImage}
                      src={TotalFundValueImageLight}
                    />
                  )}
                </Suspense>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              className={styles.card}
              bgcolor={theme.palette.background.paper}
            >
              <Box>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "10px", md: "14px" } }}
                  color="secondary"
                  variant="body2"
                >
                  Buy Cryptocurrency from FIAT
                </Typography>
                {theme.palette.mode === "dark" ? (
                  <Box mt={3} className={styles.buyCryptoButton}>
                    <Box
                      className={styles.buyCryptoButtonInnerBox}
                      borderRadius="4px"
                      bgcolor={theme.palette.background.paper}
                    >
                      <Button
                        fullWidth
                        onClick={() => navigate("/wallets/top-up")}
                        variant="text"
                        color="primary"
                        sx={{ py: 1.5 }}
                      >
                        <Typography
                          className={styles.buttonText}
                          color="primary"
                          variant="body2"
                          sx={{
                            textTransform: "capitalize",
                            fontSize: { xs: "10px", md: "14px" },
                          }}
                        >
                          Buy Crypto
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <LightUIButtonPrimary
                    onClick={() => navigate("/wallets/top-up")}
                    variant="text"
                    color="primary"
                    fullWidth
                    sx={{ py: 1.5, mt: 3 }}
                  >
                    <Typography
                      className={styles.buttonText}
                      color="#ffffff"
                      variant="body2"
                      sx={{
                        textTransform: "capitalize",
                        fontSize: { xs: "10px", md: "14px" },
                      }}
                    >
                      Buy Crypto
                    </Typography>
                  </LightUIButtonPrimary>
                )}
              </Box>
              <Box className={styles.cardImageArea}>
                <Suspense
                  fallback={
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={210}
                      height={175}
                    />
                  }
                >
                  {theme.palette.mode === "dark" ? (
                    <LazyImageComponent
                      className={styles.cardImage}
                      src={BuyCryptoCardImage}
                    />
                  ) : (
                    <LazyImageComponent
                      className={styles.cardImage}
                      src={BuyCryptoCardImageLight}
                    />
                  )}
                </Suspense>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CryptoWalletTopCards;
