const EventName = {
  from(error) {
    return error ? "error" : "success";
  },
};

export default EventName;
