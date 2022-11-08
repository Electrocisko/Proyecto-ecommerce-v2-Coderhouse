import passport from "passport";
import local from "passport-local";
import { createHash, isValidPassword } from "../helpers/cryptPassword.js";
import { saveCart } from "../services/carts.services.js";
import { saveUser, getUserByEmail, getUserById } from "../services/users.services.js";

const LocalStrategy = local.Strategy;

const initializePassport = () => {
  try {
    passport.use(
      "register",
      new LocalStrategy(
        {
          passReqToCallback: true,
          usernameField: "email",
          session: false,
        },
        async (req, email, password, done) => {
          const { name, address, age, phoneNumber } = req.body;
          if (!name || !email || !address || !password || !age || !phoneNumber)
            return res.send({ message: "incomplete data" });
          let exist = await getUserByEmail(email);
          if (exist) return res.send({ message: "already registered user" });
          const hashedPassword = await createHash(password);
          let image = req.file.filename;
          const cart = await saveCart();
          const user = {
            name,
            email,
            address,
            password: hashedPassword,
            age,
            phoneNumber,
            imageUrl: image,
            cart: cart._id,
          };
          const result = await saveUser(user);
          return done(null, result);
        }
      )
    );

    passport.use(
      "login",
      new LocalStrategy(
        {
          usernameField: "email",
          session: false,
        },
        async (email, password, done) => {
          if (!email || !password) return done(null, false);
          let user = await getUserByEmail(email);
          if (!user) return done(null, false);
          if (!isValidPassword(user, password)) return done(null, false);
          return done(null, user);
        }
      )
    );

    passport.serializeUser((user, done) => {
        done(null, user._id);
      });
    
      passport.deserializeUser(async (id, done) => {
        let result = await getUserById(id);
        return done(null, result);
      });
  } catch (error) {
    logger.log("error", `Error in passport ${error}`);
  }
};

export default initializePassport;
