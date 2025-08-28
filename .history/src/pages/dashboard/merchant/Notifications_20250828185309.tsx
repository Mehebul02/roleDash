"use client"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material"
const Notifications = () => {
    return (
        <div>
             <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <List>
                  {dummyNotifications.map((note, idx) => (
                    <Box key={idx}>
                      <ListItem>
                        <ListItemText primary={note} />
                      </ListItem>
                      {idx < dummyNotifications.length - 1 && <Divider />}
                    </Box>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        </div>
    );
};

export default Notifications;