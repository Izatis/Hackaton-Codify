import {
  Avatar,
  Button,
  Fab,
  Modal,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  Add as AddIcon,
  Image,
  VideoCameraBack,
} from "@mui/icons-material";
import { Box } from "@mui/system";

const SytledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: '100%'
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <SytledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height='400px'
          sx={{ backgroundColor: '#FFFFFF' }}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create post
          </Typography>
          <UserBox>
            <Avatar
              src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="body1">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            placeholder="Загаловок"
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", mt: 2 }}
            id="standard-multiline-static"
            multiline
            placeholder="Хэштэги"
            variant="standard"
          />
          <TextField
            sx={{ width: "100%", mt: 2, mb: 2 }}
            id="standard-multiline-static"
            variant="standard"
            placeholder="Текст"
          />
          <>
            <input
              color="primary"
              accept="image/*"
              type="file"
              id="icon-button-file"
              style={{ display: 'none', }}
            />
            <label htmlFor="icon-button-file">
              <Button
                sx={{ mr: 2 }}
                size="large"
                variant='outlined'
                color="primary"
                endIcon={<Image color="secondary" />}
              >
                фото
              </Button>
            </label>
          </>
          <>
            <input
              color="primary"
              accept="image/*"
              type="file"
              id="icon-button-file"
              style={{ display: 'none', }}
            />
            <label htmlFor="icon-button-file">
              <Button
                size="large"
                variant='outlined'
                color="primary"
                endIcon={<VideoCameraBack color="success" />}
              >
                видео
              </Button>
            </label>
          </>
          <Button
            variant="contained"
            fullWidth
            sx={{mt: 2}}
          >Post</Button>
        </Box>
      </SytledModal>
    </>
  );
};

export default AddPost;