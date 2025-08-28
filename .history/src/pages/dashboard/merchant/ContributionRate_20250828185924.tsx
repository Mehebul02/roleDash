"use client"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
} from "@mui/material"
const ContributionRate = () => {
      const [contributionRate, setContributionRate] = useState(5) 
    return (
        <div>
             <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Set Contribution Rate
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <TextField
                    type="number"
                    value={contributionRate}
                    onChange={(e) => setContributionRate(Number(e.target.value))}
                    InputProps={{ inputProps: { min: 0, max: 100 } }}
                    sx={{ width: 120 }}
                  />
                  <Button variant="contained" color="secondary">
                    Update
                  </Button>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Current contribution rate: {contributionRate}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </div>
    );
};

export default ContributionRate
