/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,

} from "@mui/material"
const Notifications = ({dummyNotifications}:any) => {
    return (
        <div>
             <Grid >
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Notifications
                </Typography>
                <List>
                  {dummyNotifications.map((note;, idx) => (
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