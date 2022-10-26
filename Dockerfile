FROM adoptopenjdk/openjdk11:alpine

ADD target/cms-admin-user-0.0.1-SNAPSHOT.jar app.jar

ARG PROFILE
ENV PROFILE=${PROFILE}
RUN echo "PROFILE = ${PROFILE}"

CMD java -jar -Dspring.profiles.active=$(echo ${PROFILE}) app.jar